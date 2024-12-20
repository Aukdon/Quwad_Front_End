import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

function TournamentCard(){

    let location = useLocation();
    let [isOrganizer, setIsPrganizer] = useState(false)
    
    useEffect(()=>{
        if(location.pathname == "/tournamentsiorganized"){
            setIsPrganizer(true);
        }
    },[])

    return (
        <div className="bg-white p-5 grid gap-2 border rounded-lg">
            <div className="flex justify-between items-center">
                <div>
                    <h1>Counter Strike 2</h1>
                    <p>Asia e-sports organization</p>
                </div>
                <div>
                    <img className="rounded-lg" src="/src/assets/icons/e-sports-icon.png" alt="E Sports Icon." />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="hidden sm:flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/location-icon.png" alt="Location Icon" />
                    <p>Online</p>
                    <p>Worldwide</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/wallet-icon.png" alt="Wallet Icon" />
                    <p>$20k Prize pool</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                    <p>15-Aug-2025</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/clock-icon.png" alt="Clock Icon" />
                    <p>06:00 PM</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <img className="max-w-[16px]" src="/src/assets/icons/dollar-icon.png" alt="Dollar Icon" />
                    <p>$500 <span className="hidden sm:inline">registration fee per team</span><span className="sm:hidden">/team</span></p>
                </div>
                <div className="flex gap-5">
                    <Link to="/tournamentDetails/0" className={`${isOrganizer ? "hidden" : ""} p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}>Register</Link>
                    <button className={`${isOrganizer ? "" : "hidden"} p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}>Edit</button>
                    <button className={`${isOrganizer ? "" : "hidden"} p-2 bg-white text-[#FF5A5F] rounded-lg border border-[#FF5A5F] transition ease-in-out hover:-translate-y-1`}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TournamentCard