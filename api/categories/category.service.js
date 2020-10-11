const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into categories(shop_id, category_name) values(?, ?)',
            [ 
                data.shop_id,
                data.category_name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCategories: callBack => {
        pool.query(
            `select categories.id, categories.shop_id, shops.shop_name, categories.category_name, categories.created_at from categories inner join shops on categories.shop_id = shops.id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getShopCategories: (id, callBack) => {
        pool.query(
            // `select id, shop_id, name, created_at from categories where id = ?`,
            `select categories.id, categories.shop_id, shops.shop_name, categories.category_name, categories.created_at from categories inner join shops on categories.shop_id = shops.id where categories.shop_id= ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCategoryById: (id, callBack) => {
        pool.query(
            // `select id, shop_id, name, created_at from categories where id = ?`,
            `select categories.id, shops.shop_name, categories.category_name, categories.created_at from categories inner join shops on categories.shop_id = shops.id where categories.id= ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateCategory: (id, data, callBack) => {
        pool.query(
            `update categories set category_name = ? where id = ?`,
            [
                data.category_name,
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
    deleteCategory: (id, callBack) => {
        pool.query(
            `delete from categories where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
};