const { 
    createCategory,
    getCategories,
    getShopCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} = require('./category.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/', checkToken, createCategory);
router.get('/', getCategories);
router.get('/shop/:id', checkToken, getShopCategories);
router.get('/:id', checkToken, getCategoryById);
router.put('/:id', checkToken, updateCategory);
router.delete('/:id', checkToken, deleteCategory);

module.exports = router;