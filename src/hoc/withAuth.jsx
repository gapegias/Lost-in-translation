import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

/* If user not specified:
    - true, navigate to start up page
    - false, navigate another component 
      (if you see other files will see that 
       it will be navigate to "/translation" page) */
const withAuth = Component => props => {
    const { user } = useUser()
    if(user !== null)
        return  <Component {...props} />
    else 
        return <Navigate to="/" />
}
export default withAuth