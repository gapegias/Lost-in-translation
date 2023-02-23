import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/Storage";
import {STORAGE_KEY_USER} from "../const/storageKeys";

// User context hook
const UserContext = createContext()
// User context to expose its state
export const useUser = () => {
    return useContext(UserContext)
}
// User provider to manage state
const UserProvider = ( { children } ) => {
    const [ user, setUser ] = useState(storageRead(STORAGE_KEY_USER))
    const state = { user, setUser}
    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    )
}
export default UserProvider