import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import webpackHotMiddleware from 'webpack-hot-middleware';
import user from './routes/user';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Define routes */
app.use('/user/', user);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
