var router = require('koa-router');
const { getOrders, updateOrders } = require('./orderController');
const simpleCors = require('../cors');

const Router = new router();

Router.get('/test', async (ctx) => {
  console.log("testu");
  ctx.response.status = 200;
  ctx.response.body = "Test successfull";
  // ctx.res.end();
});
Router.get('/orders', async (ctx) => {
  try {
    const order = await getOrders();
    console.log(order);
    ctx.response.status = 200;
    ctx.response.body = order;
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = error;
  }
});
// router.post('/create', createAbility);
// router.delete('/delete', deleteAbility);
// Router.put('/orders/update/:update_id', simpleCors, updateOrders);

module.exports = Router;