import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"
import { getAllTournamentsAPI } from "../../api/tournaments.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
function AllTournaments(){
    
    let [tournamentsArray, setTournamentsArray] = useState([]);

    let dispatch = useDispatch();

    async function getAllTournamentsData(){

        dispatch({type:"displayLoading"})
        
        let data = await getAllTournamentsAPI();
        // console.log(data.allTournaments);
        setTournamentsArray(data.allTournaments);

        if(data) dispatch({type:"resetLoading"})
    }
    
    useEffect(()=>{
        getAllTournamentsData();
    },[0])
    

    return(
        <div className="grid gap-5 md:grid-cols-8">

            {/* Mobile page title */}
            <div className="md:hidden ">
                <h1 className="text-center">All tournament</h1>
            </div>
            
            <div className="md:col-span-5">

                <div className="grid gap-2">
                    {tournamentsArray.map((tournamentData,index)=>(
                        <TournamentCard data={tournamentData} key={index}/>
                    ))}
                </div>                

            </div>

            <div className="hidden md:block md:col-span-3">
                
                <div className="bg-white p-5 grid gap-2 border rounded-lg text-[14px] lg:text-[1rem]">
                    <p className="text-[10px] flex justify-end">Promoted</p>
                    <div className="xl:flex gap-5 items-center">
                        <div>
                            <img className="rounded-lg" src="/assets/icons/e-sports-icon.png" alt="E Sports Icon." />
                        </div>
                        <div>
                            <h1>Counter Strike 2</h1>
                            <p>Asia e-sports organization</p>
                        </div>
                    </div>
                    <div className="xl:flex justify-between">
                        <div className="flex gap-2 items-center">
                            <img className="max-w-[16px]" src="/assets/icons/wallet-icon.png" alt="Wallet Icon" />
                            <p>$20k Prize pool</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="max-w-[16px]" src="/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                            <p>15-Aug-2025</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img className="max-w-[16px]" src="/assets/icons/dollar-icon.png" alt="Dollar Icon" />
                            <p>$500 <span className="hidden xl:inline">registration fee per team</span><span className="xl:hidden">/team</span></p>
                        </div>
                        <div>
                            <button className="p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1" onClick={()=>{alert("Promoted tournament.")}}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
};

export default AllTournaments