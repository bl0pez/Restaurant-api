import { connect } from 'mongoose';

export const connectDb = async () => {
  try {
    await connect('mongodb://localhost/restaurant');
    console.log('>>> Database connected');
  } catch (error) {
    console.log(error.message);
  }
};
