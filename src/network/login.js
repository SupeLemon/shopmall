import { loginReq } from "./request.js"

export function login(data) {
    return loginReq({
        url: "/login",
        data
    })
}

export function register(data) {
    return loginReq({
        url: "/users",
        data
    })
}