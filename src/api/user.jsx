import { createHeaders } from "./index"

const apiUrl = process.env.REACT_APP_API_URL // Url api from "api/.env" file
/* Check if user exists (GET method): 
    - true: return an array with error null and array with found user 
    - false: return an array with error filled and empty array */
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!response.ok)
            throw new Error('Could not complete request')
        const data = await response.json()
        return [ null, data]
    } catch (error) {   
        return [ error.message, [] ]
    }
}
/* Create a user (POST method): 
    - true: return an array with error null and array with found user 
    - false: return an array with error filled and empty array */
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if(!response.ok)
            throw new Error(`Could not create user with username ${username}`)
        const data = await response.json()
        return [ null, data]
    } catch (error) {   
        return [ error.message, [] ]
    }
}
/* When user logins:
    - if request has an error, return error
    - if found a user, return user
    - otherwise, create and return user */
export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)
    if(checkError !== null)
        return [ checkError, [] ]
    if(user.length > 0)
        return [ null, user.pop() ]
    return await createUser(username)
}
// Find user by id and return 
export const userById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if(!response.ok)
            throw new Error('Could not complete request')
        const data = await response.json()
        return [ null, data]
    } catch (error) {   
        return [ error.message, null ]
    }
}