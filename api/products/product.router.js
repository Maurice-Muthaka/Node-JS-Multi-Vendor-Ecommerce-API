const { 
    createProduct,
    getProducts,
    getShopProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('./product.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');


router.post('/', createProduct);
router.get('/', getProducts);
router.get('/shop/:id', checkToken, getShopProducts);
router.get('/:id', getProductById);
router.put('/:id', checkToken, updateProduct);
router.delete('/:id', checkToken, deleteProduct);

module.exports = router;