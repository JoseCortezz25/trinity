const path = require('path')

module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production'
  const client = isProduction ? 'mysql' : 'sqlite'
  const filename = !isProduction
    ? path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db'))
    : undefined

  const connectionToMysql = isProduction
    ? {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'db_name'),
        user: env('DATABASE_USERNAME', 'db_user'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: false,
      }
    : {}
  console.log(connectionToMysql)

  return {
    connection: {
      client,
      connection: {
        filename,
        ...connectionToMysql,
      },
      useNullAsDefault: true,
    },
  }
}
