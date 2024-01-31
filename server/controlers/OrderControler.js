const { OrderDevice,Orders} = require( "../models/models");

async function t(O){
    let items = []
    O.forEach(async e => {
        let order = await OrderDevice.findAll({where:{orderId:e.dataValues?.id}})
        items = [...items,order]
    })  
    return items      
}

class OrderControler {
    async create(req,res){
        try {
            let Items = []
            const {userId,orders} = req.body
            const O = await Orders.create({userId})
            orders.forEach(async e =>  {
                Items = [...Items,await OrderDevice.create({orderId:O.id,deviceId:e.id})]       
            });
            return res.json(Items)
        } catch (error) {
            console.log(error.message)
            res.status(500).json(error)        
        } 
    }

    async delete(req,res){
        try {
            const {id} = req.params
            const Order = await OrderDevice.destroy({where:{orderId:id}})
            const O = await Orders.destroy({where:{id}})
            return res.json(Order)
        } catch (error) {
            res.status(500).json(error)     
        }
    }

    async getAll(req,res){
        try{
            let items = []
            const {userId} = req.query
            const O = await Orders.findAll({where:{userId}})
            for(let i = 0;i < O.length;i++){
                items = [...items,await OrderDevice.findAll({where:{orderId:O[i].dataValues?.id}})]
                if(i + 1 == O.length) return res.json(items)
            }
        } catch (error) {
            console.log(error.message)
            res.status(500).json(error)     
        }  
    }


   
}

module.exports = new OrderControler()