import { $authHost,$host } from ".";

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device',device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const deleteDevice = async (id) => {
    const {data} = await $authHost.delete('api/device/' + id)
    return data
}

export const updateDevice = async (device) => {
    const {data} = await $authHost.put('api/device',device)
    return data
}