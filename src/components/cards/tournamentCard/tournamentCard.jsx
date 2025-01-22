
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { updateMyRegistations } from "../../../api/users.js";
import { deleteTournament, updateTournament } from "../../../api/tournaments.js";

function TournamentCard({data}){

    // console.log(data);

    let emailId = localStorage.getItem("emailId");

    let location = useLocation();
    let [isOrganizer, setIsOrganizer] = useState(false)
    let [isMyRegistration, setIsMyRegistration] = useState(false)
    let [isTournamentDetails, setIsTournamentDetails] = useState(false)
    let [isTournamentManage, setIsTournamentManage] = useState(false)
    let [tournamentData, setTournamentData] = useState({id:data._id, description: data.description});


    async function handlePayment(e){
        e.preventDefault();
        let resData = await updateMyRegistations({id:data._id,emailId});
        if(resData.code === 1){
            alert(resData.msg);
        }else{
            alert(resData.msg);
        }
    };
    
    function handleChange(e){
        e.preventDefault();
        setTournamentData({
            ...tournamentData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleUpdate(e){
        e.preventDefault();
        let data = await updateTournament(tournamentData);
        if(data.code){
            alert(data.msg);
        }else{
            alert(data.msg)
        }
    }

    async function handleDelete(e) {
        e.preventDefault();
        let resData = await deleteTournament({id:data._id})
        if(resData.code){
            alert(resData.msg);
        }else {
            alert(resData.msg);
        }
        
    }
    
    
    useEffect(()=>{
        if(location.pathname == "/tournamentsiorganized"){
            setIsOrganizer(true);
        }
        if(location.pathname == "/myregistrations"){
            setIsMyRegistration(true);
        }
        if(location.pathname.slice(0,18) == "/tournamentdetails"){
            setIsTournamentDetails(true);
        }
        if(location.pathname.slice(0,18) == "/tournamentmanage"){
            setIsTournamentManage(true);
        }
    },[])

    return (
        <form>
        <div className="bg-white p-5 grid gap-2 border rounded-lg">
            <div className="flex justify-between items-center">
                <div>
                    <h1>{data.gameName}</h1>
                    <p>{data.organizer}</p>
                </div>
                <div>
                    <img className="rounded-lg" src="./src/assets/icons/e-sports-icon.png" alt="E Sports Icon." />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="hidden sm:flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/location-icon.png" alt="Location Icon" />
                    <p>{data.gameMode}</p>
                    <p>{data.location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/wallet-icon.png" alt="Wallet Icon" />
                    <p>{data.prizeAmount} Prize pool</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                    <p>{data.date}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/clock-icon.png" alt="Clock Icon" />
                    <p>{data.time}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/dollar-icon.png" alt="Dollar Icon" />
                    <p>{data.registrationFee} <span className="hidden sm:inline">registration fee per team</span><span className="sm:hidden">/team</span></p>
                </div>
                <div className={`flex gap-5 ${isTournamentDetails ? "hidden" : ""}`}>
                    <Link to="/tournamentdetails" state={data} className={`${isOrganizer||isTournamentManage ? "hidden" : ""}  p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}> {`${isMyRegistration ? "Details" : "Register"}`}</Link>
                    <Link to="/tournamentmanage" state={data} className={`${isOrganizer ? "" : "hidden"} p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}>Manage</Link>
                    <button className={`${isOrganizer ? "" : "hidden"} p-2 bg-white text-[#FF5A5F] rounded-lg border border-[#FF5A5F] transition ease-in-out hover:-translate-y-1`} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            
            <div className={`${isTournamentDetails||isTournamentManage ? "" : "hidden"} grid gap-5 mb-10 md:mb-0`}>
                <h2 className="font-semibold">Description</h2>
                <textarea rows={5} name="description" placeholder="Add description." value={tournamentData.description || ""} onChange={handleChange} readOnly={ isTournamentManage ? false : true}/>
                <div className={` ${ isTournamentManage ? "" : "hidden"} flex justify-end`}>
                    <button className={`p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`} onClick={handleUpdate}>Update</button>
                </div>
                <div className={` ${isTournamentManage ? "hidden":""} flex justify-end`}>
                    <button className={`p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`} onClick={handlePayment}>Pay registration fee</button>
                </div>
            </div>
            
            <div className={` ${ isTournamentManage ? "" : "hidden"}`}>
                <h2 className="font-semibold">Participants list</h2>
                <div>
                    <div className="flex gap-5">
                        <ul>
                        {data.participants.map((participant)=>(
                            <li key={participant}>{participant}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default TournamentCard