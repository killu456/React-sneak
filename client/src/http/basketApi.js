import { $authHost,$host } from ".";

export const createBasketDevice = async (BasketDevice) => {
    const {data} = await $authHost.post('api/basket',BasketDevice)
    return data
}

export const deleteBasketDevice = async (id) => {
    const {data} = await $authHost.delete('api/basket/'+ id)
    return data
}

export const deleteAllBasketDevice = async (id) => {
    const {data} = await $authHost.delete('api/basket/'+ id)
    return data
}

export const fetchBasketDevices = async (userId) => {
    const {data} = await $authHost.get('api/basket',{params:{userId}})
    return data
}
