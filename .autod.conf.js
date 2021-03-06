'use strict';

module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test',
    'benchmark'
  ],
  devdep: [
    'egg',
    'egg-ci',
    'egg-bin',
    'egg-passport',
    'autod',
    'eslint',
    'eslint-config-egg',
    'supertest'
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage'
  ],
  registry: 'https://r.cnpmjs.org'
};
