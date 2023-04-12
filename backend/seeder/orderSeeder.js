import 'cross-fetch/dist/node-polyfill.js';
import * as dotenv from 'dotenv';
import PocketBase from 'pocketbase';
import { orderProducts, orders } from '../database/orders.js';
dotenv.config();

const pb = new PocketBase(process.env.DB_CONNECTION);
await pb.admins.authWithPassword(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
);

for (let i = 0; i < orders.length; i++) {
  const order = orders[i];
  const formData = new FormData();
  for (const [key, value] of Object.entries(order)) {
    formData.append(key, value);
  }
  await pb.collection('orders').create(formData);
}

for (let i = 0; i < orderProducts.length; i++) {
  const order = orderProducts[i];
  const formData = new FormData();
  for (const [key, value] of Object.entries(order)) {
    formData.append(key, value);
  }
  await pb.collection('order_products').create(formData);
}
