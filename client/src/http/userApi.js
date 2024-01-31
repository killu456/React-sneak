import { $authHost,$host } from ".";
import jwt_decode from "jwt-decode"; 

export const registration = async (User) => {
    const {data} = await $host.post('api/user/registration',User)
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token).id
}

export const login = async (email,password) => {
    const {data} = await $host.post('api/user/login',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token).id
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth',)
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}