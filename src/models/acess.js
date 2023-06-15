import { Pool } from 'pg';

const pool = new Pool({
  user: 'Daniel',
  host: 'localhost',
  database: 'Mais Solidario',
  password: '323019',
  port: 5432,
});

export default pool;
