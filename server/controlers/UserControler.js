const ApiError  = require("../Error/ApiError");
const { User,Basket, Favorites, Orders } = require("../models/models")
const jwt =  require('jsonwebtoken')
const bcrypt = require('bcrypt')


const generateJwt = (id,email,role) => {
    return  jwt.sign(
        {id,email,role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    ) 
}

const createDefaultAdmin = async () =>{
    const Admin = await User.findOne({where:{role:"ADMIN"}})
    if(!Admin) {
        const passwordhash = await bcrypt.hash(process.env.DB_PASSWORD,5)
        await User.create({name:"Администратор",email:"Admin@mail.ru",role:"ADMIN",password:passwordhash}); 
    }
}

class UserControler{
    async registration(req,res,next){
        const {name,email,password,role} = req.body
        if(!email || !password || !name) return(next(ApiError.badRequest('Не введён пароль ,логин или имя!')));
        const condidate = await User.findOne({where:{email}})
        if(condidate) return(next(ApiError.badRequest('Пользователь с таким email уже создан!'))); 

        createDefaultAdmin();

        const hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({name,email,role,password:hashPassword})
        const basket = await Basket.create({userId:user.id})
        const favorite = await Favorites.create({userId:user.id})
        const token = generateJwt(user)
        return res.json({token})
    }

    async login(req,res,next){
        const {email,password}  = req.body
        createDefaultAdmin();
        const user = await User.findOne({where:{email}})
        if(!user){
            return(next(ApiError.internal('Пользователь не найден')))
        }
        const comparePassword =  bcrypt.compareSync(password,user.password)
        if(!comparePassword){
            return(next(ApiError.internal('Указан неверный пароль')))
        }
        const token = generateJwt(user)
        return(res.json({token}))
    }

    async check(req,res){
        const token = jwt.generateJwt(req.user.id,req.user.name,req.user.email,req.user.role)
        res.json({token})
    }


}

module.exports = new UserControler()