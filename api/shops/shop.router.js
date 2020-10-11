const { 
    createShop,
    getShops,
    getShopById,
    updateShop,
    deleteShop,
    login
} = require('./shop.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/', createShop);
router.get('/', getShops);
router.get('/:id', checkToken, getShopById);
router.put('/:id', checkToken, updateShop);
router.delete('/:id', checkToken, deleteShop);
router.post('/login', login);

module.exports = router;