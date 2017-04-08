/*
 * cn-interview - server.js
 * Copyright(c) 2017 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const app = require('./app')

app.listen(() => {
  console.log('app start at http://localhost:%s ', app.address().port)
})
