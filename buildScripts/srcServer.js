import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Phil", "lastName": "Moir", "email": "pgmoir@gmail.com"},
    {"id": 2, "firstName": "Calum", "lastName": "Moir", "email": "pgmoir.cpmoir@gmail.com"},
    {"id": 3, "firstName": "Iona", "lastName": "Moir", "email": "pgmoir.immoir@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('httP://localhost:' + port);
  }
});
