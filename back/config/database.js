const path = require('path')

module.exports = ({ env }) => {
  const filename =
    env('NODE_ENV') === 'development'
      ? path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db'))
      : undefined

  console.log(env('NODE_ENV'))

  const connectionToMysql =
    env('NODE_ENV') !== 'development'
      ? {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'db_name'),
          username: env('DATABASE_USERNAME', 'db_user'),
          password: env('DATABASE_PASSWORD', 'password'),
          schema: 'public',
        }
      : {}

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename,
        ...connectionToMysql,
      },
      useNullAsDefault: true,
    },
  }
}
