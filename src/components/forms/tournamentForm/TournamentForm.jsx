import { useState } from "react";
import { createTournament } from "../../../api/tournaments.js";

function TournamentForm(){

    let emailId = localStorage.getItem("emailId");

    let [tournamentData, setTournamentData] = useState({emailId});

    function handleChange(e){
        e.preventDefault();
        setTournamentData({
            ...tournamentData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleCreate(e){
        e.preventDefault();
        // console.log(tournamentData); 
        let data = await createTournament(tournamentData);
        // console.log(data);
        if(data.code==1){
            console.log(data.msg);
            setTournamentData({});
        }else{
            alert(data.msg);
        }
    }

    return(
        <form action="submit" className="grid gap-5">
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="gameName" type="text" placeholder="Game name" value={tournamentData.gameName||""} onChange={handleChange}/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="organizer" type="text" placeholder="Organizer" value={tournamentData.organizer||""} onChange={handleChange}/>
            </div>
            <div>
                <select className="p-2 border rounded-lg w-full text-center md:text-start" name="gameType" type="text" value={tournamentData.gameType||""} onChange={handleChange}>
                    <option value="">Select Game Type</option>
                    <option value="sports">Sports</option>
                    <option value="eSports">E Sports</option>
                </select>
            </div>
            <div>
                <select className="p-2 border rounded-lg w-full text-center md:text-start" name="gameMode" type="text" value={tournamentData.gameMode||""} onChange={handleChange}>
                    <option value="">Select Game Mode</option>
                    <option value="online">Online</option>
                    <option value="onsite">On-Site</option>
                </select>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="location" type="text" placeholder="Location - Worldwide" value={tournamentData.location||""} onChange={handleChange}/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="time" type="time" value={tournamentData.time||""} onChange={handleChange}/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="date" type="date" value={tournamentData.date||""} onChange={handleChange}/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="prizeAmount" type="number" placeholder="Total prize amount" value={tournamentData.prizeAmount||""} onChange={handleChange}/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="registrationFee" type="number" placeholder="Set registration fee" value={tournamentData.registrationFee||""} onChange={handleChange}/>
            </div>

            <div className="flex justify-center">
                <button className="p-2 bg-white border border-[#4C51BF] text-[#4C51BF] rounded-lg transition ease-in-out hover:-translate-y-1" onClick={handleCreate}>Create</button>
            </div>
            
        </form>
    )
};

export default TournamentForm