const { Router } = require('express')

const routes = Router()

const ProductsController = require('../app/controllers/Products')

routes.get('/', (req, res) => {
    res.send('Hello World')
})

routes.get('/products', ProductsController.readAll)
routes.get('/products/:id', ProductsController.readOne)
routes.post('/products', ProductsController.create)
routes.put('/products/:id', ProductsController.update)
routes.delete('/products/:id', ProductsController.delete)

module.exports = routes