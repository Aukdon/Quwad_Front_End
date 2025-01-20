import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/homePage/HomePage.jsx"
import Layout from "./Layout.jsx"
import AllTournaments from "../pages/tournaments/AllTournaments.jsx"
import SignIn from "../pages/signIn/SignIn.jsx"
import SignUp from "../pages/signUp/SignUp.jsx"
import MyRegistrations from "../pages/myRegistrations/MyRegistrations.jsx"
import MyProfile from "../pages/myProfile/MyProfile.jsx"
import TournamentsIOrganized from "../pages/tournamentsIOrganized/TournamentsIOrganize.jsx"
import TournamentDetails from "../pages/tournamentDetails/TournamentDetails.jsx"
import TournamentManage from "../pages/tournamentManage/TournamentManage.jsx"
import ProtectedRoutes from "./ProtectedRoutes.jsx"

function AppRoutes(){
    return(
        <BrowserRouter>

            <Routes>
                
                {/* Protected Routes */}
                <Route path="/" element={<ProtectedRoutes component={<Layout/>}/>}>
                    <Route index element={<AllTournaments/>}/>
                    <Route path="/alltournaments" element={<AllTournaments/>}/>
                    <Route path="/tournamentdetails" element={<TournamentDetails/>}/>
                    <Route path="/myregistrations" element={<MyRegistrations/>}/>
                    <Route path="/myprofile" element={<MyProfile/>}/>
                    <Route path="/tournamentsiorganized" element={<TournamentsIOrganized/>}/>
                    <Route path="/tournamentmanage" element={<TournamentManage/>}/>
                </Route>

                {/* Public routes */}
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes