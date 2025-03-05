import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"
import TournamentForm from "../../components/forms/tournamentForm/TournamentForm.jsx"
import { tournamentsOrganizedAPI } from "../../api/tournaments.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function TournamentsIOrganized(){

    let emailId = localStorage.getItem("emailId");
    let [tournamentsArray, setTournamentsArray] = useState([]);

    let navigate = useNavigate();
    let dispatch = useDispatch();

    async function getAllTournamentsData(){

        dispatch({type: "displayLoading"})
        let data = await tournamentsOrganizedAPI({emailId});
        // console.log(data);
        if(data.code == 1){
            setTournamentsArray(data.allTournaments);
        }else{
            alert(data.msg);
            navigate("/myprofile");
        }

        if(data) dispatch({type: "resetLoading"})
        
    }
    
    useEffect(()=>{
        getAllTournamentsData();
    },[0])

    return(
        <div className="md:grid gap-5 md:grid-cols-8">
            
            {/* Tournament create form apprean on top on mobile devices */}
            <div className="md:hidden col-span-3 bg-white p-5 border rounded-lg">
                <h1 className="mb-5 text-center">Create new tournament</h1>
                <TournamentForm/>
            </div>

            <div className="col-span-5">
                {tournamentsArray.map((tournamentData,index)=>(
                    <TournamentCard data={tournamentData} key={index}/>
                ))}
            </div>
            
            {/* Tournament create form apprears on Right sied of the page on larger devices */}
            <div className="hidden md:block col-span-3 bg-white p-5 border rounded-lg">
                <h1 className="mb-5">Create new tournament</h1>
                <TournamentForm/>
            </div>

        </div>
    )
};

export default TournamentsIOrganized