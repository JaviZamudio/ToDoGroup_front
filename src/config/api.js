import { api } from './config';

const defaultOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}


export const login = async (userName, password) => {
    const bodyData = {
        userName,
        password,
    };

    const response = await fetch(
        `${api.host}${api.uri}/users/login`, 
        {
            ...defaultOptions,
            body: JSON.stringify(bodyData)
        })
        .then(res => res.json())

    return response;
}