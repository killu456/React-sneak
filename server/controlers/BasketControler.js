const { Basket,BasketDevice } = require( "../models/models");

class BasketControler {
    async create(req,res){
        try {
            const {userId,deviceId} = req.body
            const B = await Basket.findOne({where:{userId}})
            const BasketD = await BasketDevice.create({basketId:B.dataValues.id,deviceId})
            return res.json(BasketD)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)        
        } 
    }

    async delete(req,res){
        try {
            const {id} = req.params
            const Basket = await BasketDevice.destroy({where:{id}})
            return res.json(Basket)
        } catch (error) {
            res.status(500).json(error)     
        }
    }


    async getAll(req,res){
        const {userId} = req.query
        const B = await Basket.findOne({where:{userId}})
        const Baskets = await BasketDevice.findAll({where:{basketId:B?.dataValues?.id}})
        return res.json(Baskets) 
    }
}

module.exports = new BasketControler()

