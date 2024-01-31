const sq = require('../db');
const { DataTypes } = require('sequelize');

 const User = sq.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})

 const Device = sq.define('device',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false,unique:true},
    rating:{type:DataTypes.INTEGER,defaultValue:0}
})

const Orders = sq.define('orders',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    address:{type:DataTypes.STRING,allowNull:false},

})

const OrderDevice = sq.define('orderDevice',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
   
})

const Favorites = sq.define('favorites',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})

const FavoriteDevice = sq.define('favoriteDevice',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})

 const Rating = sq.define('rating',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    rate:{type:DataTypes.INTEGER,allowNull:false},
})

 const Basket = sq.define('basket',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

 const BasketDevice = sq.define('basket_device',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

 const DeviceInfo = sq.define('device_info',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    description:{type: DataTypes.STRING,allowNull:false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Orders)
Orders.belongsTo(User)

User.hasOne(Favorites)
Favorites.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Orders.hasMany(OrderDevice)
OrderDevice.belongsTo(Orders)

Favorites.hasMany(FavoriteDevice)
FavoriteDevice.belongsTo(Favorites)

User.hasOne(Rating)
Rating.belongsTo(User)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(OrderDevice)
OrderDevice.belongsTo(Device)

Device.hasMany(FavoriteDevice)
FavoriteDevice.belongsTo(Device)

Device.hasMany(DeviceInfo,{as: 'info'})
DeviceInfo.belongsTo(Device)

module.exports = {
    User,
    Device,
    Rating,
    Basket,
    BasketDevice,
    DeviceInfo,
    OrderDevice,
    Orders,
    Favorites,
    FavoriteDevice
}



