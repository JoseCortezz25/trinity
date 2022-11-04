'use strict';

const { findDOMNode } = require('react-dom');

/**
 * rol-trinity controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::rol-trinity.rol-trinity', ({ strapi }) => ({
    //Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
        try {
            ctx.body = 'ok';
        } catch (err) {
          ctx.body = err;
        }
    },
    
 

    //Method 2: Wrapping a core action (leaves core logic in place)

    async find(ctx) {

        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en' };

        // Calling the default core action 

        const { data } = await super.find(ctx);

        // Some more custom logic


        return data;
    },

    async findOne(ctx) {

        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en' };

        // Calling the default core action 

        const { data } = await super.findOne(ctx);

        // Some more custom logic


        return data;
    }
 
}))
