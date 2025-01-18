import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"

function MyRegistrations(){
    return(
        <div className="grid gap-5 md:grid-cols-8">
            <div className="col-span-5">
                {/* <TournamentCard/> */}
            </div>
            <div className="hidden sm:grid col-span-3 gap-5">
                <div className="p-2 bg-white border rounded-lg flex items-center justify-center">
                    <p>Suggested Tournaments for You.</p>
                </div>
                <div className="p-2 bg-white border rounded-lg flex items-center">
                    <p>No suggestions available at the moment. Participate in more tournaments to receive personalized recommendationss.</p>
                </div>
            </div>
        </div>
    )
}

export default MyRegistrations