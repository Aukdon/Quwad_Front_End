
import { useLocation } from "react-router-dom"
import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"

function TournamentDetails(){

    const location = useLocation();
    const data = location.state || {};
    // console.log(data);
    
    return(
        <div>
            <TournamentCard data={data}/>
        </div>
    )
};

export default TournamentDetails