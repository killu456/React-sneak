import { $authHost,$host } from ".";

export const createOrderDevice = async (OrderDevice) => {
    const {data} = await $authHost.post('api/orders',OrderDevice)
    return data
}

export const deleteOrderDevice = async (id) => {
    const {data} = await $authHost.delete('api/orders/'+ id)
    return data
}

export const fetchOrderDevices = async (userId) => {
    const {data} = await $authHost.get('api/orders',{params:{userId}})
    return data
}