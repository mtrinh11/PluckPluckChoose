require('dotenv').config()
module.exports = {
    development: {
        database: "pluck",
        dialect: "postgres",
    },
    test: {
        database: "my_first_db",
        dialect: "postgres"
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        database: "my_first_db",
        dialect: "postgres",
        dialectOptions: {
            ssl: {
              rejectUnauthorized: false,
              require: true
            }
          }
    }
}