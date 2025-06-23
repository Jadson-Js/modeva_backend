import { MongoClient } from 'mongodb';
import {
  mongoDbUri,
  mongoDbName,
} from '../../../shared/config/database.config';

if (!mongoDbUri) throw new Error('mongoDbUri is not defined');

const client = new MongoClient(mongoDbUri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log(`🔗 Connect to the ${mongoDbName} database`);
  } catch {
    console.log('❌ Error connecting to the database');
  } finally {
    await client.close();
  }
}

export { connectToDatabase };
