import withAuth  from "../hoc/withAuth";
import { useUser } from "../context/UserContext";
import './Page.css';
import { useEffect } from "react";
import { userById } from "../api/user";
import { storageSave } from "../utils/Storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import ProfileTranslationHistoryItem from "../components/profile/ProfileTranslationHistoryItem";
import '../components/profile/ProfileComponents.css';
import { translationClearHistory } from "../api/userTranslation";

function ProfilePage() {
    // User hook
    const { user, setUser } = useUser()
    // Side effects
    useEffect(() => {
        const findUser = async() => {
            const [ error, latestUser ] = await userById(user.id)
            if(error === null){
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    }, [ setUser, user.id ])
    // Returns last 10 user's translations 
    const translationList = [...user.translations]
       .reverse()
       .slice(0, 10)
       .map((translation, index) => <ProfileTranslationHistoryItem 
                                       key={ index + '-' + translation } 
                                       translation={ translation } />)
    // Clears user's translations in session storage and api
    const handleClearHistoryClick = async() => {
        if(window.confirm('This can not be undone.\nAre you sure?')){
            const [ error, result ] = await translationClearHistory(user.id)
            if(error === null){
                const updatedUser = {...user, translations: []}
                storageSave(updatedUser)
                setUser(updatedUser)
            }
        }
    }

    return (
        <>
            <div className='Page'>
                <form>
                    <span className='ProfileComponents'>
                        <h2>Your translation history </h2>
                        <p style={{display:(translationList.length === 0)? "block" : "none"}}>Try some translations 😃</p>
                        <ol>
                            { translationList }
                        </ol>
                        <button onClick={ handleClearHistoryClick }>Clear History</button>
                    </span>
                </form>
            </div>
        </>
    )
}

export default withAuth(ProfilePage)