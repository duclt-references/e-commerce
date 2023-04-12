import 'cross-fetch/dist/node-polyfill.js';
import * as dotenv from 'dotenv';
import PocketBase from 'pocketbase';
import { tables } from './tables.js';

dotenv.config();

const pb = new PocketBase(process.env.DB_CONNECTION);

await pb.admins.authWithPassword('admin@gmail.com', 'admin123456');
try {
  await pb.collections.delete('order_products');
  await pb.collections.delete('orders');
  await pb.collections.delete('products');
  await pb.collections.delete('users');
  await pb.collections.delete('categories');

  pb.collections.import(tables, false);
} catch {
  pb.collections.import(tables, false);
}
