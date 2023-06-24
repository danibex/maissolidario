import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mais_solidario',
  password: '323019',
  port: 5432,
});

export default pool;