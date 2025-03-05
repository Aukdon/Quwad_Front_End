import { Link, Outlet } from"react-router-dom";
import Header from "../components/header/Header.jsx";
import AlertCard from "../components/cards/alertCard/alertCard.jsx";
import LoadingCard from "../components/cards/loadingCard/loadingCard.jsx";

function Layout(){
    let data = {
        headerType:"notHome"
    }
    return(

        <div className="p-5 md:p-0 md:grid grid-cols-12 gap-5">


            {/* Header Section */}
            <Header data={data}/>

            <AlertCard/>

            <LoadingCard />

            {/* Side bar section */}
            <section className="p-5 col-start-2 col-span-2 bg-white border rounded-lg min-h-dvh hidden md:block">
                <div className="grid gap-20">
                    <div className="grid gap-5">
                        <h2 className="text-center font-semibold">Tournaments</h2>
                        <ul className="grid gap-5">
                            <li><Link to="/alltournaments">Tournaments</Link></li>
                            <li><Link to="/myregistrations">My registations</Link></li>
                            <li><Link to="/myprofile">My profile</Link></li>
                        </ul>
                    </div>
                    <div className="grid gap-5">
                        <h2 className="text-center font-semibold">Organizer</h2>
                        <ul>
                            <li><Link to="/tournamentsiorganized">Tournaments</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Content section */}
            <section className="col-span-8 pb-10">
                <Outlet/>
            </section>

            {/* Mobile menu */}
            <section className="mx-5 pb-5 md:hidden fixed bottom-0 left-0 right-0 bg-white">
                <div className="p-2 bg-white border rounded-lg">
                    <ul className="flex justify-between">
                        <li><Link to="/alltournaments">Home</Link></li>
                        <li><Link to="/myregistrations">My Regisration</Link></li>
                        <li><Link to="/tournamentsiorganized">Organize</Link></li>
                        <li><Link to="/myprofile">Profile</Link></li>
                    </ul>
                </div>
            </section>

        </div>

    )
};

export default Layout