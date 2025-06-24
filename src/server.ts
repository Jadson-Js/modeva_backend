import { app } from './app';
import { connectToDatabase } from './infra/database/mongoose/connection';

const PORT = 3000;

async function startServer() {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`🔥 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server failed to start', error);
    process.exit(1);
  }
}

startServer();
