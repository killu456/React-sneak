import { $authHost,$host } from ".";

export const createFavoriteDevice = async (FavoriteDevice) => {
    const {data} = await $authHost.post('api/favorites',FavoriteDevice)
    return data
}

export const deleteFavoriteDevice = async (id) => {
    const {data} = await $authHost.delete('api/favorites/'+ id)
    return data
}

export const fetchFavoriteDevices = async (userId) => {
    const {data} = await $authHost.get('api/favorites',{params:{userId}})
    return data
}