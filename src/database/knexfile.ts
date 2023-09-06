import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {

  development: {
    client: "postgresql",
    connection: {
      database: "eazyevent",
      user: "postgres",
      password: "sreehari@e123"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "eazyevent",
      user: "postgres",
      password: "sreehari@e123"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default config;
