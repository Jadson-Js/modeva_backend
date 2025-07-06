import mongoose from 'mongoose';
import { mongoDbUri, mongoDbName } from '../../../shared/config/environment';

async function connectToDatabase() {
  try {
    if (!mongoDbUri) throw new Error('mongoDbUri is not defined');

    await mongoose.connect(mongoDbUri);

    console.log(`🔗 Connect to the ${mongoDbName} database`);
  } catch {
    console.log('❌ Error connecting to the database');
  }
}

export { connectToDatabase };
