import { Device ,DeviceInfo} from "../models/models.js";
import { ApiError } from "../Error/ApiError.js";
import path from 'node:path';

const uuid = require('uuid');
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export class DeviceControler{
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
}