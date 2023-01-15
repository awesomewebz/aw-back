import dotenv from 'dotenv';

dotenv.config();

const {APP_PORT, MONGO_CONNECTION_URL} = process.env;
export {APP_PORT, MONGO_CONNECTION_URL};