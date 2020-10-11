const { createPool } = require('mysql');

const pool = createPool({
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vello_food',
    connectionLimit: 10
});

module.exports = pool;