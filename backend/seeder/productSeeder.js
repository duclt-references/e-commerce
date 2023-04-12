import 'cross-fetch/dist/node-polyfill.js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import PocketBase from 'pocketbase';
import { products } from '../database/products.js';

dotenv.config();
const pb = new PocketBase(process.env.DB_CONNECTION);

await pb.admins.authWithPassword(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
);

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const formData = new FormData();
  for (const [key, value] of Object.entries(product)) {
    switch (key) {
      case 'title': {
        formData.append(key, value);
        formData.append(
          'url',
          value
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
        );
        break;
      }
      case 'thumbnail': {
        formData.append(
          key,
          new Blob([fs.readFileSync(value)]),
          `product-thumbnail.jpg`
        );
        break;
      }
      case 'images': {
        value.forEach((img) => {
          formData.append(
            key,
            new Blob([fs.readFileSync(img)]),
            `product-${i + 1}.jpg`
          );
        });
        break;
      }
      case 'category': {
        const category = await pb
          .collection('categories')
          .getFirstListItem(`slug ~ "${product.category}"`);
        formData.append(category, category.id);
        break;
      }
      default: {
        formData.append(key, value);
        break;
      }
    }
  }
  await pb.collection('products').create(formData);
}
