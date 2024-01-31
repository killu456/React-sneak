const { Device ,DeviceInfo} = require( "../models/models");
const ApiError = require("../Error/ApiError");
const uuid = require('uuid');
const path = require('path');
const { where } = require("sequelize");





class DeviceControler{
    async create(req ,res,next){
        try {
            let {name,price,info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name,price,img:fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(e => {
                    DeviceInfo.create({
                        title:i.title,
                        description:i.description,
                        deviceId:device.dataValues.id
                    })
                });
            }
            
            return res.json(device)
        } catch (error) {
            return next(ApiError.badRequest(error.message))  
        }    
    }

    async getOne(req,res){
            const {id} = req.params
            const device = await Device.findOne({
                where:{id},
                include:[{model:DeviceInfo,as: 'info'}]
            })    
            return res.json(device)
    }

    async getAll(req,res){
        const devices = await Device.findAll()
        return res.json(devices)
    }

    
    async delete(req,res){
        try {
            const {id} = req.params
            const DInfo = await DeviceInfo.destroy({where:{deviceId:id}})
            const device = await Device.destroy({where:{id}})
            return res.json(device)
        } catch (error) {
            res.status(500).json(error)     
        }
    }

    async update(req,res,next){
        try{
            let item = {}
            let {id,name,price} = req.body

            if(req.files?.img){
                let {img} = req.files
                let fileName = uuid.v4() + '.jpg';
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                item.img = fileName
            }

            if(String(name).length > 2) item.name = name

            if(Number(price) > 0) item.price = price

            console.log(item)
            if(item.price || item.img || item.name){
                const D = await Device.update(item,{where:{id:id}})
                return res.json(D)    
            }
        } catch (error) {
            console.log(error.message)
            return next(ApiError.badRequest(error.message))  
        } 
    }
}

module.exports = new DeviceControler()