const { 
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin,
    login
} = require('./admin.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/', createAdmin);
router.get('/', checkToken, getAdmins);
router.get('/:id', checkToken, getAdminById);
router.put('/:id', checkToken, updateAdmin);
router.delete('/:id', checkToken, deleteAdmin);
router.post('/login', login);

module.exports = router;