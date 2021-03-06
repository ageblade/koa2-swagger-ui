const Koa = require('koa');
const koaSwagger = require('../lib/');

const app = new Koa();
module.exports = app;

app.use(koaSwagger());

/* istanbul ignore if */
if (!module.parent) {
  app.listen(3000);
  console.log('listening on: http://localhost:3000/docs');
}
