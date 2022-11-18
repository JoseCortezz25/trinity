'use strict'

/**
 * rol-trinity controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::rol-trinity.rol-trinity',
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, local: 'en' }
      const { data } = await super.find(ctx)

      return data
    },
    async findOne(ctx) {
      ctx.query = { ...ctx.query, local: 'en' }
      const { data } = await super.findOne(ctx)

      return data
    },
  })
)
