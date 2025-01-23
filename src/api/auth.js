import { URL } from "./configuration"

export const register = async (body) => {
    const f = await fetch(`${URL}/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await f.json()
}
export const login = async (body) => {
    const f = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })

    return await f.json()
}