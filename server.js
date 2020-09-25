/* eslint-disable no-console */
import express from 'express';
// import sasMiddleware from 'node-sass-middleware';
// import path from 'path';
// import bodyParser from 'body-parser';

import config from './config';

const server = express();

// server.use(
//   sasMiddleware({
//     src: path.join(__dirname, '/sass'),
//     dest: path.join(__dirname, '/public'),
//   })
// );

// server.use(bodyParser.json);

// server.set('view engine', 'ejs');
// server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
  res.send('Hello Express!');
});

// server.get('/index', (req, res) => {
//   console.log('Test /index');
//   res.render('index');
// });

server.listen(config.port, config.host, () => {
  console.log(`Listening on port: ${config.port}`);
});