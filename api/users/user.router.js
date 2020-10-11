const { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    login
} = require('./user.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/', createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUserById);
router.put('/:id', checkToken, updateUser);
router.delete('/:id', checkToken, deleteUser);
router.post('/login', login);

module.exports = router;