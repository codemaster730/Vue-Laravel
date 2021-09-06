'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API: '"http://localhost:8000/api/"',
})
