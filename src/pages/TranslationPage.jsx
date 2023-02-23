import withAuth  from "../hoc/withAuth";
import { useForm } from 'react-hook-form';
import React, {useState} from 'react'
import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/userTranslation";
import { storageSave } from "../utils/Storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

/* Text configuration:
    - text must be typed
    - text must have at least 1 character */
const wordConfig = { required: true }

const TranslationPage = () => {
    // useForm Object
    const { register, handleSubmit, formState: {errors} } = useForm() // useForm handles to not reload our page all the time    
    // Translate word hook
    const [ translateWord, setTranslateWord ] = useState("");
    // User hook
    const { user, setUser } = useUser()
    /* Object for demonstrate errors:
        - no message for no errors
        - error message for empty text */
    const errorMessage = (() => {
        if(!errors.word)
            return null
        if(errors.word.type === "required")
            return <span>🚨 Text is required</span>  
    })()
    // When 'submit' button clicked, take the word and traslate in images
    const onSubmit = async ({ word })  => {
        const images = []
        const letters = /^[A-Za-z\s]*$/
        if(word.match(letters)){
            let index = 0;
            let trimFromExtraSpaces = word.split(' ')
                                          .filter(letter => letter !== '')
                                          .join(' ')
            for(const letter of trimFromExtraSpaces){
                index++
                if(letter === ' '){
                    images.push(<img src={"Images/individial_signs/space.png"} 
                                 alt={letter + ".png"} 
                                 key={index}/>)
                }
                else{
                   images.push(<img src={"Images/individial_signs/" + letter.toLowerCase() + ".png"} 
                                    alt={letter + ".png"} 
                                    key={index}/>)
                }
            }
            setTranslateWord(images)
            const [ error, updatedUser ] = await translationAdd(user, word)
            storageSave(STORAGE_KEY_USER, updatedUser)
            setUser(updatedUser)
        }
    }
    // When text box is clicked, delete translation 
    const deleteImagesInChange = async (event) => {
            setTranslateWord()
    }

    return (
        <>
            <div className='Page'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>🚨 Text can not contain number or special character</p>
                    <input type='text' placeholder="Type your word here"     
                    onClick={ deleteImagesInChange }           
                    { ...register("word", wordConfig)}  />
                    <button type='submit'>translate</button>
                    <p>{ errorMessage }</p>
                    <p style={{display:(translateWord)? "block" : "none"}}>Translation</p>
                    <section>{translateWord}</section>
                </form>
            </div>
        </>
    )
}

export default withAuth(TranslationPage)
