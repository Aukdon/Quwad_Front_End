
function TournamentForm(){

    function handleCreate(e){
        e.preventDefault();
    }

    return(
        <form action="submit" className="grid gap-5">
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="gameName" type="text" placeholder="Game name"/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="organizer" type="text" placeholder="Organizer"/>
            </div>
            <div>
                <select className="p-2 border rounded-lg w-full text-center md:text-start" name="gameType" type="text">
                    <option value="">Select Game Type</option>
                    <option value="sports">Sports</option>
                    <option value="eSports">E Sports</option>
                </select>
            </div>
            <div>
                <select className="p-2 border rounded-lg w-full text-center md:text-start" name="gameMode" type="text">
                    <option value="">Select Game Mode</option>
                    <option value="online">Online</option>
                    <option value="onsite">On-Site</option>
                </select>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="location" type="text" placeholder="Location - Worldwide"/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="time" type="time"/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="date" type="date"/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="prizeAmount" type="number" placeholder="Total prize amount"/>
            </div>
            <div>
                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="registrationFee" type="number" placeholder="Set registration fee"/>
            </div>

            <div className="flex justify-center">
                <button className="p-2 bg-white border border-[#4C51BF] text-[#4C51BF] rounded-lg transition ease-in-out hover:-translate-y-1" onClick={handleCreate}>Create</button>
            </div>
            
        </form>
    )
};

export default TournamentForm