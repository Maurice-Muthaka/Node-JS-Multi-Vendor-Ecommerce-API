const { create,
    getProducts,
    getShopProducts,
    getProductById,
    updateProduct,
    deleteProduct,
 } = require('./product.service');

module.exports = {
    createProduct: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Product saved successfully !'
            });
        });
    },
    getProducts: (req, res) => {
        getProducts((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'No Product found'
                });
            }
            return res.json(
                results
            );
        });
    },
    getShopProducts: (req, res) => {
        const id = req.params.id;
        getShopProducts(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'No product found !'
                });
            }
            return res.json(
                results
            );
        });
    },
    getProductById: (req, res) => {
        const id = req.params.id;
        getProductById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Product not found'
                });
            }
            return res.json(
                results
            );
        });
    },
    updateProduct: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        updateProduct(id, body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Oops something went wrong'
                });
            }
            // if (!results) {
            //     return res.json({
            //         success: 0,
            //         message: 'User not found'
            //     });
            // }
            return res.status(200).json({
                success: 1,
                message: 'Product updated successfully'
            });
        });
    },
    deleteProduct: (req, res) => {
        const id = req.params.id;
        deleteProduct(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            // if (!results) {
            //     return res.json({
            //         success: 0,
            //         message: 'User not found'
            //     });
            // }
            return res.json({
                success: 1,
                data: 'Product deleted successfully'
            });
        });
    }
}