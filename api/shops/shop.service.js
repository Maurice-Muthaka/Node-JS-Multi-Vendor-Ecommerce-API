const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into shops(shop_name, email, mobile, address, open, close, password) values(?, ?, ?, ?, ?, ?, ?)',
            [ 
                data.shop_name,
                data.email,
                data.mobile,
                data.address,
                data.open,
                data.close,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getShops: callBack => {
        pool.query(
            `select id, shop_name, email, mobile, address, open, close from shops`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getShopById: (id, callBack) => {
        pool.query(
            `select id, shop_name, email, mobile, address, open, close from shops where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateShop: (id, data, callBack) => {
        pool.query(
            `update shops set shop_name = ?, email = ?, mobile = ?, address = ?, open = ?, close = ?, password = ? where id = ?`,
            [
                data.shop_name,
                data.email,
                data.mobile,
                data.address,
                data.open,
                data.close,
                data.password,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteShop: (id, callBack) => {
        pool.query(
            `delete from shops where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getShopByEmail: (email, callBack) => {
        pool.query(
            `select * from shops where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
};