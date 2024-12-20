import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"

function MyRegistrations(){
    return(
        <div className="grid gap-5 md:grid-cols-8">
            <div className="col-span-5">
                <TournamentCard/>
            </div>
            <div className="col-span-3 hidden sm:block">
                Notifications
            </div>
        </div>
    )
}

export default MyRegistrations