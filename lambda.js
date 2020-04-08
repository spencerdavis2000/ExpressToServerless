'use strict'

// This file is AWS lambda entry point
// all your business code (expressJS app) should be done in src/app.js

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app');
const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};