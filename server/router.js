// Router here
// these routes are correct. there is no need to modify anything! nice one
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.getProducts)
  .post(controller.post)

router
  .route('/users')
  .get(controller.getUsers)

router
  .route('/products/:id')
  .put(controller.put)
  .delete(controller.delete)

module.exports = router