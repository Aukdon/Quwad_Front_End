import { useLocation } from "react-router-dom"
import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"

function TournamentManage(){

    let location = useLocation();
    let data = location.state || {};
    // console.log(data);
    

    return(
        <TournamentCard data={data}/>
    )
};

export default TournamentManage