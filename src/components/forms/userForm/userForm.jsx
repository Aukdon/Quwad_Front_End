import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserDetails, updateUserProfile } from "../../../api/users.js";
import { useDispatch } from "react-redux";


function UserForm({data}){

    let location = useLocation();

    let emailId = localStorage.getItem("emailId");

    let [userInput, setUserInput] = useState({})

    let dispatch = useDispatch()

    async function getProfileData() {
        // console.log({emailId});

        dispatch({type: "displayLoading"})
        
        let data = await getUserDetails({emailId});
        // console.log(data.userObject);
        setUserInput(data.userObject);

        dispatch({type: "resetLoading"})

    }


    let [isOrganizerValue, setIsOrganizerValue] = useState(userInput.isOrganizer)
    let [profile, setProfile] = useState(false)
    
    function handleOrganizerValue(e){
        setIsOrganizerValue(!isOrganizerValue);

        setUserInput({
            ...userInput,
            [e.target.name] : !isOrganizerValue,
        });

    }

    function handleSignUp(e){
        e.preventDefault();
        console.log(isOrganizerValue);
    }

    async function handleUpdate(e){
        e.preventDefault();
        let resData = await updateUserProfile({...userInput});
        if(resData.code == 1){
            alert(resData.msg);
        }else{
            alert(resData.msg); 
        }
    }


    function handleChange(e){
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value,
        });
    }

    useEffect(()=>{
        if(location.pathname == "/myprofile"){
            // setIsOrganizerValue(true)
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
                    <input className={`p-2 border rounded-lg w-full text-center md:text-start bg-gray-300`} name="emailId" type="text" placeholder="Email Id" value={userInput.emailId || ""} onChange={handleChange} readOnly/>
                </div>
                <div className="hidden">
                    <input className="p-2 border rounded-lg w-full text-center md:text-start" name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={handleChange}/>
                </div>
                <div className={`px-5 flex gap-5 ${profile ? "hidden" : ""}`}>
                    <input className="p-2 border rounded-lg" name="isOrganizer" type="checkbox" onChange={handleOrganizerValue}/>
                    <label htmlFor="isOrganizer">Are you going to organize tournaments?</label>
                </div>
                <div className={`grid gap-5`}>
                    <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="organizerName" type="text" placeholder="Organizer Name" value={userInput.organizerName || ""} onChange={handleChange}/>
                    </div>
                    {/* <div>
                        <input className="p-2 border rounded-lg w-full text-center md:text-start" name="organizerName" type="text" placeholder="Organizer Unique Id. No empty spaces." value={userInput.organizerId || ""} onChange={handleChange}/>
                    </div> */}
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
                    <button className={`${profile ? "" : "hidden"} p-2 rounded-lg bg-[#4C51BF] text-white`} onClick={handleUpdate}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm