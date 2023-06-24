import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.USER_POSTGRES,
  host: process.env.HOST,
  database: 'mais_solidario',
  password: '323019',
  port: 5432,
});

export default pool;