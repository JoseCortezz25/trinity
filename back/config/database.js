const path = require('path')

module.exports = ({ env }) => {
  const argv = process.argv.filter((p) => p.includes('--env='))
  console.log(argv)
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
        username: env('DATABASE_USERNAME', 'db_user'),
        password: env('DATABASE_PASSWORD', ''),
        schema: 'public',
        ssl: false,
      }
    : {}

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
