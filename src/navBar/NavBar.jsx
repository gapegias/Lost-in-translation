import { NavLink } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { storageDelete } from "../utils/Storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

const NavBar = () => {
    // User hook
    const { user, setUser } = useUser()
    /* Return of this file is header to each page. So it checks if user is null:
        - true, show only page title
        - false, show navigation bar */
    let  visibility = user !== null ? "inline-block" : "none"
    /* By clicking "logout" button:
        - set user object null, so to redirect to start up page
        - delete current user from local storage */
    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            setUser(null)
            storageDelete(STORAGE_KEY_USER)
        }
    }

    return (
      <nav>
          <ul>
              <li>Lost In Translation</li>
              <li style={{ display: visibility}}><NavLink to='/translation'>Translation</NavLink></li>
              <li style={{ display: visibility}}>  |  </li>
              <li style={{ display: visibility}}><NavLink to='/profile'>Profile</NavLink></li>
              <li style={{ display: visibility}}>  |  </li>
              <li style={{ display: visibility}}><NavLink to='/' onClick={ handleLogoutClick }>Logout</NavLink></li>
          </ul>
      </nav>
    )
}

export default NavBar