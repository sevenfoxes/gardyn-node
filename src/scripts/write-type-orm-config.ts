import fs = require('fs');
import dotenv = require('dotenv');

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  GARDYN_ENV,
} = process.env;

const isDev = GARDYN_ENV === 'dev';

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(
    {
      isGlobal: true,
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DATABASE,

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: !isDev,
    },
    null,
    2,
  ),
);
