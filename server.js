//server(api/projects, api/router)

const express = require('express');
const server = express();


server.use(express.json());


server.get('/', (req, res) => {
  console.log('server start res')
  res.json({test:"initial serve start"});
});




module.exports = server;