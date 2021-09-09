
const {Router} = require('express')
const Product = require('../models/product')
const router = Router()

function toGood(favour){
    return favour.items.map(c => ({
        ...c.productId._doc
    }))
}


router.post('/add', async (req, res) => {

    try{
       const product = await Product.findById(req.body.id)
       req.user.addFavour(product)

      return res.json({message: {
        value: 'Товар добавлен в избранное',
        type: 'success'
      }});

    }catch(e){
        console.log(e)
    }

})

router.post('/remove', async (req, res) => {

    try {
        let product = await Product.findById((req.body.id))
        req.user.removeFavour(product)

        // product = await req.user.populate('favour.items.goodId').execPopulate()
        // const good = toGood(clothes.favour)

        return res.json({message: {
          value: 'Товар удален из избранного',
          type: 'success'
        }});

    }catch(e){
        console.log(e)
    }

})


router.get('/', async (req, res) => {

    try{
       const user = await req.user.populate('favour.items.productId').execPopulate()
       const products = toGood(user.favour)

       return res.json({products, message: {
        value: 'Товар удален из избранного',
        type: 'success'
       }});

    }catch(e){
        console.log(e)
    }
})

module.exports = router
