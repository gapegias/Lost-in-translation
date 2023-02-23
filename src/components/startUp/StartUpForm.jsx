import './StartUpForm.css';
import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/Storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import {STORAGE_KEY_USER} from "../../const/storageKeys";

/* Username configuration:
    - Username must be typed
    - Username must have at least 3 characters */
const usernameConfig = { required: true}
// StartUp Form
const StartUpForm = () => {
    // useForm Object
    const { register, handleSubmit, formState: {errors} } = useForm() // useForm handles to not reload our page all the time
    // User hook
    const { user, setUser } = useUser()
    // Navigate hook to navigate programmatically
    const navigate = useNavigate()
    //const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)
    // Side effect
    useEffect( () => {
        if(user !== null)
            navigate('/translation')
    }, [user, navigate])
    /* Object for demonstrate errors:
        - no message for no errors
        - error message for empty username */
    const errorMessage = (() => {
        if(!errors.username)
            return null
        if (errors.username.type === "required")
            return <span>🚨 Username is required</span>  
    })()
    /* When click submit button for username:
        - if error, storage error
        - if user returned, storage user object to session storage*/
    const onSubmit = async ( { username } ) => {
        const [ error, userResponse ] = await loginUser(username)
        if(error !== null)
            setApiError(error)
        if(userResponse !== null){
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
    } 
    return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='StartUpForm'>
            <div>
                <table style={{marginLeft:'auto', marginRight: 'auto'}}>
                  <tbody>
                     <tr>
                        <td>
                            <img src='/Images/Logo.png' alt="robotLogo.png" />
                        </td>
                        <td>
                            <p> <label>Lost In Translation</label> </p>
                            <p> <label>Get started</label> </p>
                        </td>
                    </tr> 
                  </tbody>
                </table>
                <input type='text' placeholder="What's your name?"                   
                { ...register("username", usernameConfig) } />
                <button type='submit'>
                    <img src='/Images/arrowIcon.png' alt='arrowIcon.png' />
                </button>
                <p> { errorMessage } </p>
            </div>
        </form>
    </>
    )
}

export default StartUpForm