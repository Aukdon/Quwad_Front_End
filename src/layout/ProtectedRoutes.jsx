import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({component}){
    try {
        
        let jwtToken = localStorage.getItem("token");

        let token = jwtDecode(jwtToken);
        localStorage.setItem("emailId",token.emailId);

        if(token.isSignedIn) return component;
        else <Navigate to="/signin" />;

    } catch (error) {
        return <Navigate to="/signin" />
    }
}
export default ProtectedRoutes