//base server here
const server = require('./server');


const port =  5000;
server.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
