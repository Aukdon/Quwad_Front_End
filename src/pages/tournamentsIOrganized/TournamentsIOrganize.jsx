import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"
import TournamentForm from "../../components/forms/tournamentForm/TournamentForm.jsx"
import { tournamentsOrganizedAPI } from "../../api/tournaments.js";
import { useState, useEffect } from "react";
function TournamentsIOrganized(){

    let emailId = localStorage.getItem("emailId");
    let [tournamentsArray, setTournamentsArray] = useState([]);

    async function getAllTournamentsData(){
        let data = await tournamentsOrganizedAPI({emailId});
        console.log(data.allTournaments);
        setTournamentsArray(data.allTournaments);
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