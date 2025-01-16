import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

function TournamentCard(){

    let location = useLocation();
    let [isOrganizer, setIsOrganizer] = useState(false)
    let [isMyRegistration, setIsMyRegistration] = useState(false)
    let [isTournamentDetails, setIsTournamentDetails] = useState(false)
    let [isTournamentManage, setIsTournamentManage] = useState(false)
    
    
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
                <div className={`flex gap-5 ${isTournamentDetails ? "hidden" : ""}`}>
                    <Link to="/tournamentdetails/0" className={`${isOrganizer||isTournamentManage ? "hidden" : ""}  p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}> {`${isMyRegistration ? "Details" : "Register"}`}</Link>
                    <Link to="/tournamentmanage" className={`${isOrganizer ? "" : "hidden"} p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}>Manage</Link>
                    <button className={`${isOrganizer ? "" : "hidden"} p-2 bg-white text-[#FF5A5F] rounded-lg border border-[#FF5A5F] transition ease-in-out hover:-translate-y-1`}>Delete</button>
                </div>
            </div>
            <div className={`${isTournamentDetails||isTournamentManage ? "" : "hidden"} grid gap-5 mb-10 md:mb-0`}>
                <h2 className="font-semibold">Description</h2>
                <div>
                    <p>
                        CS2 Esports Tournament - $20,000 Prize Pool
                        Compete in the ultimate CS2 esports tournament for a share of the $20,000 prize pool! With a thrilling single-elimination format, the tournament will feature top teams from around the world battling through intense matches. The tournament runs from January 10-22, 2024, with qualifiers leading to the main event. Teams must register by January 8, 2024, and comply with the event's code of conduct. Don't miss your chance to showcase your skills and claim the prize!
                        Prize Pool Breakdown:
                            1st: $10,000
                            2nd: $5,000
                            3rd: $3,000
                            4th: $2,000
                    </p>
                </div>
                <div className={` ${isTournamentManage ? "hidden":""} flex justify-end`}>
                    <Link to="" className={`p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1`}>Pay registration fee</Link>
                </div>
            </div>
            <div className={` ${ isTournamentManage ? "" : "hidden"}`}>
                <h2 className="font-semibold">Participants list</h2>
                <div>
                    <div className="flex gap-5">
                        <h3>Alpha trion</h3>
                        <p>alphatrion@yahoo.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TournamentCard