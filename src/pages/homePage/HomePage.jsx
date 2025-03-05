import { Link } from "react-router-dom"
import Header from "../../components/header/Header.jsx"

function HomePage(){
    let data = {
        headerType:"home"
    }
    return(
        <div className="p-5 md:p-0 md:grid grid-cols-12 gap-5">

            {/* Header */}
            <Header data={data}/>

            {/* Main Body */}
            <section className="col-start-2 col-span-10 grid gap-20 text-center md:text-start">
                
                <section className="grid md:grid-cols-2 items-center">
                    <div className="flex justify-center">
                        <div className="max-w-[400px]">
                        <img className="rounded-lg w-full" src="/assets/images/sportsImages-transparentBackground.png" alt="Game console image." />
                        </div>
                    </div>
                    <div className="grid gap-5 md:text-end">
                        <h1 className="text-[32px]">Quwad</h1>
                        <div className="text-[24px]">
                            <h1>Join your favorite tournaments or create and organize your own—compete and connect with players worldwide.</h1>
                            <p className="text-[16px]">The Ultimate Platform for Every Sport.</p>
                            <div className="flex justify-center mt-5">
                                <Link to="/signin" className={`p-2 bg-[#4C51BF] text-white border rounded-lg hover:border-[#4C51BF] hover:bg-white hover:text-[#4C51BF] flex items-center`}>Find tournaments</Link>
                            </div>
                        </div>
                        <div className="lg:hidden flex gap-5 justify-center">
                            <Link to="/signin" className={`p-2 bg-[#4C51BF] text-white border rounded-lg hover:border-[#4C51BF] hover:bg-white hover:text-[#4C51BF] flex items-center`}>Sign in</Link>
                            <Link to="/signup" className={`p-2 bg-white text-[#4C51BF] border border-[#4C51BF] rounded-lg hover:bg-[#4C51BF] hover:text-white flex items-center`}>Sign up</Link>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 items-center bg-[#fff] md:p-5">
    
                    <div className="grid gap-5">
                        <h1 className="text-[32px]">Seamless tournament registration and management</h1>
                        <div className="">
                            <h1>Easily discover and register for the sports tournaments that interest you.</h1>
                            <h1>Browse and join tournaments based on your preferred device category, all in a seamless, user-friendly experience.</h1>
                        </div>
                    </div>
                    <div className="grid gap-2 xl:grid-cols-2 justify-center md:justify-end">                        
                        <div className="max-w-[250px] rounded-lg shadow-md">
                            <img className="w-full" src="/assets/images/cardPaymentsImage.png" alt="Registration image." />
                        </div>
                        <div className="max-w-[250px] rounded-lg shadow-md">
                            <img className="w-full transform scale-x-[-1]" src="/assets/images/bookingCalendar.png" alt="Registration image." />
                        </div>
                        <div className="max-w-[250px] rounded-lg shadow-md">
                            <img className="w-full" src="/assets/images/softwareEngineer.png" alt="Registration image." />
                        </div>
                    </div>

                </section>

                <section className="grid gap-5 items-center">

                    <h1 className="text-[32px]">Organizers and payments</h1>

                    <div className="md:flex justify-between">
                        
                        <div className="p-5 bg-white border rounded-lg">
                            <h1 className="text-[20px]">We are looking for organizers</h1>
                            <div className="flex gap-5 justify-between items-center">
                                <ul className="text-start">
                                    <li>Organizer registration</li>
                                    <li>Earning potential</li>
                                    <li>Required documents</li>
                                </ul>

                                <div className="max-w-[200px]">
                                    <img className="w-full" src="/assets/images/developer-workstation-image.png" alt="Developer at workstation image." />
                                </div>

                            </div>
                        </div>

                        <div className="p-5 bg-white border rounded-lg">
                            <h1 className="text-[20px]">How payments are handled</h1>
                            <div className="flex gap-5 justify-between items-center">
                                <ul className="text-start">
                                    <li>Payment handling</li>
                                    <li>Fraud prevention</li>
                                    <li>Zero tolerance policy</li>
                                </ul>

                                <div className="max-w-[200px]">
                                    <img className="w-full" src="/assets/images/card-mobile-payment-image.png" alt="Developer at workstation image." />
                                </div>

                            </div>
                        </div>

                    </div>

                </section>

                <section className="mb-10">
                    <div className="p-20 bg-[#4C51BF] text-white flex justify-center rounded-lg hover:bg-white hover:border hover:border-[#4C51BF] hover:text-[#4C51BF]">
                        <h1 className="text-[32px]">A product of <a href="https://aukdon.com" target="_blank" className="underline">Aukdon</a></h1>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default HomePage