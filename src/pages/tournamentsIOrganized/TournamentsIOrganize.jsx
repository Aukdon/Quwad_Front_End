import TournamentCard from "../../components/cards/tournamentCard/tournamentCard.jsx"
import TournamentForm from "../../components/forms/tournamentForm/TournamentForm.jsx"

function TournamentsIOrganized(){
    return(
        <div className="md:grid gap-5 md:grid-cols-8">
            
            {/* Tournament create form apprean on top on mobile devices */}
            <div className="md:hidden col-span-3 bg-white p-5 border rounded-lg">
                <h1 className="mb-5 text-center">Create new tournament</h1>
                <TournamentForm/>
            </div>

            <div className="col-span-5">
                <TournamentCard/>
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