import { sq } from '../db.js';
import { DataTypes } from 'sequelize';

export const User = sq.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})

export const Device = sq.define('device',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false,unique:true},
    rating:{type:DataTypes.INTEGER,defaultValue:0}
})

export const Rating = sq.define('rating',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    rate:{type:DataTypes.INTEGER,allowNull:false},
})

export const Basket = sq.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

export const BasketDevice = sq.define('basket_device',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

export const DeviceInfo = sq.define('device_info',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    description:{type: DataTypes.STRING,allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

User.hasOne(Rating)
Rating.belongsTo(User)

User.hasMany(Device)
Device.belongsTo(User)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo,{as: 'info'})
DeviceInfo.belongsTo(Device)



