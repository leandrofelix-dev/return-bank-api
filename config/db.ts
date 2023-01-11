import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri')

  try {
    mongoose.set('strictQuery', true) // Analisar o que isso faz
    await mongoose.connect(dbUri)
    Logger.info('Conectado à base de dados 🔗')
  }
  
  catch (e: any) {
    Logger.error(`Error: ${e}`)
    process.exit(1)
  }
}

export default connect
