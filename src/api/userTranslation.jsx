import { createHeaders } from "./index"

const apiUrl = process.env.REACT_APP_API_URL // Url api from "api/.env" file
// Patch request for updating extra values to translations property of user
export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        if(!response.ok)
            throw new Error('Could not add translation')
        const result = await response.json()
        return [ null, result]
    } catch (error) {   
        return [ error.message, null ]
    }
}
// Patch request for updating translations property of user to empty 
export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if(!response.ok)
            throw new Error('Could not complete request')
        const result = await response.json()
        return [ null, result ]
    } catch (error) {   
        return [ error.message, null ]
    }
}