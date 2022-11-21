'use strict';

/**
 * recommend-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recommend-resource.recommend-resource');
