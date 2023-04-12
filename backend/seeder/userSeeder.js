import 'cross-fetch/dist/node-polyfill.js';
import * as dotenv from 'dotenv';
import PocketBase from 'pocketbase';
import { users } from '../database/users.js';
dotenv.config();

const pb = new PocketBase(process.env.DB_CONNECTION);
await pb.admins.authWithPassword(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD
);

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const formData = new FormData();
  for (const [key, value] of Object.entries(user)) {
    formData.append(key, value);
  }
  await pb.collection('users').create(formData);
}
