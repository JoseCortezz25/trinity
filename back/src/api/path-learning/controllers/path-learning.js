'use strict'

/**
 * path-learning controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::path-learning.path-learning',
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, local: 'en' }
      const { data: result, meta } = await super.find(ctx)
      const { pagination } = meta

      return { result, pagination }
    },
    async findOne(ctx) {
      ctx.query = { ...ctx.query, local: 'en' }
      const { data: result } = await super.findOne(ctx)

      return result
    },
  })
)
