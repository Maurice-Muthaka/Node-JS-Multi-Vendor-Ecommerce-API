const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into products(shop_id, category_id, item_name, image, price, duration, description) values(?, ?, ?, ?, ?, ?, ?)',
            [ 
                data.shop_id,
                data.category_id,
                data.item_name,
                data.image,
                data.price,
                data.duration,
                data.description
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getProducts: callBack => {
        pool.query(
            `select products.id, products.shop_id, shops.shop_name, categories.category_name, products.item_name, products.image, products.price, products.duration, products.description, products.created_at from products inner join shops on products.shop_id = shops.id inner join categories on products.category_id = categories.id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getShopProducts: (id, callBack) => {
        pool.query(
            // `select id, shop_id, name, created_at from categories where id = ?`,
            `select products.id, products.shop_id, shops.shop_name, categories.category_name, products.item_name, products.image, products.price, products.duration, products.description, products.created_at from products inner join shops on products.shop_id = shops.id inner join categories on products.category_id = categories.id where products.shop_id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getProductById: (id, callBack) => {
        pool.query(
            // `select id, shop_id, name, created_at from categories where id = ?`,
            `select products.id, shops.shop_name, categories.category_name, products.item_name, products.image, products.price, products.duration, products.description, products.created_at from products inner join shops on products.shop_id = shops.id inner join categories on products.category_id = categories.id where products.id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateProduct: (id, data, callBack) => {
        pool.query(
            `update products set category_id = ?, item_name = ?, image = ?, price = ?, duration = ?, description = ? where id = ?`,
            [
                data.category_id,
                data.item_name,
                data.image,
                data.price,
                data.duration,
                data.description,
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
    deleteProduct: (id, callBack) => {
        pool.query(
            `delete from products where id = ?`,
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