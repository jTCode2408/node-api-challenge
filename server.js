//server(api/projects, api/router)

const express = require('express');
const server = express();
const router = require('./api/router')

server.use(express.json());
server.use('/api', router)


server.get('/', (req, res) => {
  console.log('server start res')
  res.json({test:"initial serve start"});
});




module.exports = server;