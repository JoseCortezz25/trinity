'use strict'

/**
 * level controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::level.level', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, local: 'en' }
    const { data } = await super.find(ctx)

    return data
  },
  async findOne(ctx) {
    ctx.query = { ...ctx.query, local: 'en' }
    const { data: result } = await super.findOne(ctx)

    return result
  },
}))
