'use strict';

// TODO: MODIFICATED
const { join, resolve } = require('path');

const backend = 'back'
const source = `${backend}/src`

const getDirs = ({ app: appDir, dist: distDir }, { strapi }) => ({
  dist: {
    root: join(distDir, backend),
    src: join(distDir, source),
    api: join(distDir, source, 'api'),
    components: join(distDir, source, 'components'),
    extensions: join(distDir, source, 'extensions'),
    policies: join(distDir, source, 'policies'),
    middlewares: join(distDir, source, 'middlewares'),
    config: join(distDir, backend, 'config'),
  },
  app: {
    root: join(appDir, backend),
    src: join(appDir, source),
    api: join(appDir, source, 'api'),
    components: join(appDir, source, 'components'),
    extensions: join(appDir, source, 'extensions'),
    policies: join(appDir, source, 'policies'),
    middlewares: join(appDir, source, 'middlewares'),
    config: join(appDir, backend, 'config'),
  },
  static: {
    public: resolve(appDir, strapi.config.get('server.dirs.public')),
  },
})

module.exports = getDirs;
