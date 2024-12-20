import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function UserForm({data}){

    let location = useLocation();


    let [isOrganizerValue, setIsOrganizerValue] = useState(false)
    let [profile, setProfile] = useState(false)
    
    function handleOrganizerValue(){
        setIsOrganizerValue(!isOrganizerValue);
    }

    function handleSignUp(e){
        e.preventDefault();
        console.log(isOrganizerValue);
        
    }

    useEffect(()=>{
        if(location.pathname == "/myprofile"){
            setIsOrganizerValue(true)
            setProfile(true)
        }
    },[])

    return(
        <div>
            <form action="submit" className="grid gap-5">
                <div>
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="fullName" type="text" placeholder="Full name"/>
                </div>
                <div>
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="emailId" type="text" placeholder="Email Id"/>
                </div>
                <div>
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="password" type="password" placeholder="Password"/>
                </div>
                <div className={`px-5 flex gap-5 ${profile ? "hidden" : ""}`}>
                    <input className="p-2 border rounded-lg" name="isOrganizer" type="checkbox" onChange={handleOrganizerValue}/>
                    <label htmlFor="isOrganizer">Are you going to organize tournaments?</label>
                </div>
                <div className={`${isOrganizerValue ? "" : "hidden"} grid gap-5`}>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="governmentId" type="text" placeholder="Government Id"/>
                    </div>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="mobileNumber" type="text" placeholder="Mobile number"/>
                    </div>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="bankAccountNumber" type="text" placeholder="Bank account number"/>
                    </div>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="bankCode" type="text" placeholder="IFSC or SWIFT number"/>
                    </div>
                </div>
                <div className={`flex justify-center`}>
                    <button className={`${profile ? "hidden" : ""} p-2 rounded-lg bg-[#4C51BF] text-white`} onClick={handleSignUp}>Sign up</button>
                    <button className={`${profile ? "" : "hidden"} p-2 rounded-lg bg-[#4C51BF] text-white`} onClick={handleSignUp}>Edit</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm