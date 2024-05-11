import express from 'express';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const app = express();

// Logging middleware
app.use((req, res, next) => {
  console.log('-------------------------------------');
  console.log(`Request: ${req.method} ${req.url}`);
  return next();
});

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {}));

// /api/cheeses
app.get('/api/cheeses', (req, res) => {
  return res.status(200).json([
    {name: 'Cheddar', description: 'Very tasty.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
    {name: 'Cheddar', description: 'Very tasty.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
    {name: 'Cheddar', description: 'Very tasty.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
    {name: 'Cheddar', description: 'Very tasty.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
    {name: 'Cheddar', description: 'Very tasty.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
  ]);
});

app.listen(PORT, HOST, () => {
  console.log(`Server started listening on ${HOST}:${PORT}`);
});