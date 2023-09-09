import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      console.log('Connecting to database');
      return mongoose.connect('mongodb://localhost/restaurants');
    },
  },
];
