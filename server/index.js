require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const PORT = 4000;
app = express();

app.use(proxy('/products/*', {target: 'http://ec2-3-17-61-156.us-east-2.compute.amazonaws.com:3003'}));
app.use(proxy('/api/checkout/*', {target: 'http://ec2-52-15-159-32.us-east-2.compute.amazonaws.com:1234'}));

app.use(express.static('public'));

app.get('/loaderio-f9dedb3ba75f0f968f2259703ca68ade', (req, res) => {
  res.send('loaderio-f9dedb3ba75f0f968f2259703ca68ade');
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}:`);
});