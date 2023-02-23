// Save user object to session storage
export const storageSave = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}
/* Check the user object in session storage if exists:
    - true, return user object
    - false, return null */
export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if(data)
        return JSON.parse(data)
    return null
}
// Delete current user from session storage
export const storageDelete = (key) => {
    sessionStorage.removeItem(key)
}
