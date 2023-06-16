import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.USER_POSTGRES,
  host: process.env.HOST,
  database: 'Mais Solidario',
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

export default pool;