import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserDetails } from "../../../api/users.js";


function UserForm({data}){

    let location = useLocation();

    let emailId = localStorage.getItem("emailId");

    let [userInput, setUserInput] = useState({})

    async function getProfileData() {
        // console.log({emailId});
        
        let data = await getUserDetails({emailId});
        // console.log(data.userObject);
        setUserInput(data.userObject);
    }


    let [isOrganizerValue, setIsOrganizerValue] = useState(false)
    let [profile, setProfile] = useState(false)
    
    function handleOrganizerValue(){
        setIsOrganizerValue(!isOrganizerValue);
    }

    function handleSignUp(e){
        e.preventDefault();
        console.log(isOrganizerValue);
        
    }

    function handleChange(e){
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value,
        });
    }

    useEffect(()=>{
        if(location.pathname == "/myprofile"){
            setIsOrganizerValue(true)
            setProfile(true)
        };
        getProfileData();
    },[]);

    return(
        <div>
            <form action="submit" className="grid gap-5">
                <div>
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="fullName" type="text" placeholder="Full name" value={userInput.fullName || ""} onChange={handleChange}/>
                </div>
                <div>
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="emailId" type="text" placeholder="Email Id" value={userInput.emailId || ""} onChange={handleChange}/>
                </div>
                <div className="hidden">
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={handleChange}/>
                </div>
                <div className={`px-5 flex gap-5 ${profile ? "hidden" : ""}`}>
                    <input className="p-2 border rounded-lg" name="isOrganizer" type="checkbox" onChange={handleOrganizerValue}/>
                    <label htmlFor="isOrganizer">Are you going to organize tournaments?</label>
                </div>
                <div className={`${isOrganizerValue ? "" : "hidden"} grid gap-5`}>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="governmentId" type="text" placeholder="Government Id" value={userInput.governmentId || ""} onChange={handleChange}/>
                    </div>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="mobileNumber" type="text" placeholder="Mobile number" value={userInput.mobileNumber || ""} onChange={handleChange}/>
                    </div>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="bankAccountNumber" type="text" placeholder="Bank account number" value={userInput.bankAccountNumber || ""} onChange={handleChange}/>
                    </div>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="bankCode" type="text" placeholder="IFSC or SWIFT number" value={userInput.bankCode || ""} onChange={handleChange}/>
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