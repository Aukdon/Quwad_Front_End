
function AllTournaments(){
    return(
        <div className="grid gap-5 md:grid-cols-8">
            <div className="col-span-5">
                
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
                            <button className="p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1">Register</button>
                            <button className="hidden p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1">Edit</button>
                            <button className="hidden p-2 bg-white text-[#FF5A5F] rounded-lg border border-[#FF5A5F] transition ease-in-out hover:-translate-y-1">Delete</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hidden md:block col-span-3">
                <div className="bg-white p-5 grid gap-2 border rounded-lg text-[14px] lg:text-[1rem]">
                    <div className="xl:flex gap-5 items-center">
                        <div>
                            <img className="rounded-lg" src="/src/assets/icons/e-sports-icon.png" alt="E Sports Icon." />
                        </div>
                        <div>
                            <h1>Counter Strike 2</h1>
                            <p>Asia e-sports organization</p>
                        </div>
                    </div>
                    <div className="xl:flex justify-between">
                        <div className="flex gap-2 items-center">
                            <img className="max-w-[16px]" src="/src/assets/icons/wallet-icon.png" alt="Wallet Icon" />
                            <p>$20k Prize pool</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="max-w-[16px]" src="/src/assets/icons/calendar-icon.png" alt="Calendar Icon" />
                            <p>15-Aug-2025</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img className="max-w-[16px]" src="/src/assets/icons/dollar-icon.png" alt="Dollar Icon" />
                            <p>$500 <span className="hidden xl:inline">registration fee per team</span><span className="xl:hidden">/team</span></p>
                        </div>
                        <div>
                            <button className="p-2 bg-[#4C51BF] text-white rounded-lg transition ease-in-out hover:-translate-y-1">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
};

export default AllTournaments