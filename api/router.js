const express = require('express');
const projectRouter = require('./projectRouter')

const router = express.Router();


router.use('/projects', projectRouter);


module.exports = router;