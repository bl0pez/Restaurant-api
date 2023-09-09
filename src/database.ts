import { connect } from 'mongoose';
import { config } from './config';

export const connectDb = async () => {
  try {
    await connect(config.databaseUrl as string);
    console.log('>>> Database connected');
  } catch (error) {
    console.log(error.message);
  }
};
