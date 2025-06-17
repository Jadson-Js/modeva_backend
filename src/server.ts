import { app } from './app';
import { connectToDatabase } from './infra/database/mongoose/connection';

const PORT = 3000;

async function startServer() {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log('❌ Erro ao iniciar o servidor');
    console.log(error);
    process.exit(1);
  }
}

startServer();
