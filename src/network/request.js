import axios from "axios"

export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {

    })

    return instance(config)
}

export function loginReq(config) {
    const instance = axios.create({
        baseURL: "http://localhost:8000",
        timeout: 5000,
        method: "post"
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })

    instance.interceptors.response.use(res => {
        return res
    }, err => {

    })

    return instance(config)
}