const { FavoriteDevice,Favorites} = require( "../models/models");

class FavoriteControler {
    async create(req,res){
        try {
            const {userId,deviceId} = req.body
            const F = await Favorites.findOne({where:{userId}})
            const FavoriteD = await FavoriteDevice.create({favoriteId:F.dataValues.id,deviceId})
            return res.json(FavoriteD)
        } catch (error) {
            res.status(500).json(error)        
        } 
    }

    async delete(req,res){
        try {
            const {id} = req.params
            const Favorite = await FavoriteDevice.destroy({where:{id}})
            return res.json(Favorite)
        } catch (error) {
            res.status(500).json(error)     
        }
    }

    async getAll(req,res){
        try{
            const {userId} = req.query
            const F = await Favorites.findOne({where:{userId}})          
            const Favorite = await FavoriteDevice.findAll({where:{favoriteId:F?.dataValues?.id}}) 
            return res.json(Favorite) 
        } catch (error) {
            console.log(error.message)
            res.status(500).json(error)     
        }
    }
}

module.exports = new FavoriteControler()