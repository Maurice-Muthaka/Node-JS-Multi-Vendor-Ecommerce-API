const { 
    createOrder,
    getOrders,
    getShopOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
} = require('./order.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/', createOrder);
router.get('/', checkToken, getOrders);
router.get('/shop/:id',checkToken, getShopOrders);
router.get('/:id', checkToken, getOrderById);
router.put('/:id', checkToken, updateOrder);
router.delete('/:id', checkToken, deleteOrder);

module.exports = router;