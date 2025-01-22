import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({component}){
    try {
        
        let jwtToken = localStorage.getItem("token");

        let token = jwtDecode(jwtToken);
        localStorage.setItem("emailId",token.emailId);
        localStorage.setItem("organizerName",token.organizerName);

        // Check token expiry
        let currentTime = Date.now() / 1000; // Current time in seconds.
        if (token.exp<currentTime){
            localStorage.clear();
            return <Navigate to="/signin" />
        }
        

        if(token.isSignedIn) return component;
        else <Navigate to="/signin" />;

    } catch (error) {
        return <Navigate to="/signin" />
    }
}
export default ProtectedRoutes