import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  port: 3000,
};