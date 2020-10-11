const { create,
    getCategories,
    getShopCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
 } = require('./category.service');

module.exports = {
    createCategory: (req, res) => {
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
                message: 'Category saved successfully !'
            });
        });
    },
    getCategories: (req, res) => {
        getCategories((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'No Category found'
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getShopCategories: (req, res) => {
        const id = req.params.id;
        getShopCategories(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'No category found'
                });
            }
            return res.json(
                results
            );
        });
    },
    getCategoryById: (req, res) => {
        const id = req.params.id;
        getCategoryById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Category not found'
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateCategory: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        updateCategory(id, body, (err, results) => {
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
                message: 'Category updated successfully'
            });
        });
    },
    deleteCategory: (req, res) => {
        const id = req.params.id;
        deleteCategory(id, (err, results) => {
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
                data: 'Category deleted successfully'
            });
        });
    }
}