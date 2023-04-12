import 'cross-fetch/dist/node-polyfill.js';
import * as dotenv from 'dotenv';
import PocketBase from 'pocketbase';
import { categories } from '../database/categories.js';
dotenv.config();

const pb = new PocketBase(process.env.DB_CONNECTION);
await pb.admins.authWithPassword(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
);

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const formData = new FormData();
  for (const [key, value] of Object.entries(category)) {
    formData.append(key, value);
  }
  await pb.collection('categories').create(formData);
}
