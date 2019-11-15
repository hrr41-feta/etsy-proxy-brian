require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const PORT = 4000;
app = express();

app.use(proxy('/products/*', {target: 'http://ec2-3-17-61-156.us-east-2.compute.amazonaws.com:3003'}));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}:`);
});