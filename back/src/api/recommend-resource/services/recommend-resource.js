'use strict';

/**
 * recommend-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommend-resource.recommend-resource');
