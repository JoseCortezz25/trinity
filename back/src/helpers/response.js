const getResponse = async (ctx, method) => {
  ctx.query = { ...ctx.query, local: 'en' }
  console.log('[+]', method)
  const { data } = await method(ctx)

  return data
}

module.exports = { getResponse }
