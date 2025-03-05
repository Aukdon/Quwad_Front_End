import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpAPI } from "../../api/authentication.js";
import AlertCard from "../../components/cards/alertCard/alertCard.jsx";
import { useDispatch } from "react-redux";

function SignUp(){

    let [isOrganizerValue, setIsOrganizerValue] = useState(false)

    let [userInput, setUserInput] = useState({isOrganizer:false})

    let navigate = useNavigate();

    let dispatch = useDispatch();

    function handleOrganizerValue(){
        setIsOrganizerValue(!isOrganizerValue);
        
        setUserInput({...userInput, 
            isOrganizer : (!userInput.isOrganizer)
        });
    }

    async function handleSignUp(e){
        e.preventDefault();
        // console.log(userInput);
        let data = await signUpAPI(userInput);
        console.log(data);
        if(data.code){
            navigate("/signin")
        }else{
            // alert(data.msg);
            dispatch({type:"displayAlert", message:data.msg});
        }
    }

    function handleChange(e){
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value,
        });
    }

    return(
        <div className="grid grid-cols-12 min-h-dvh items-center text-center md:text-start">

            <AlertCard />
            
            <div className="col-start-3 col-span-8 grid gap-5 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-[64px] text-[#4C51BF] font-semibold">Quwad</h1>
                    <p>The Ultimate Platform for Every Sport.</p>
                    <p>Already have an account? <Link to="/signin" className="text-[#4299E1]">Sign in</Link>.</p>
                </div>

                <div>
                    <form action="submit" className="grid gap-5">
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="fullName" type="text" placeholder="Full name" value={userInput.fullName || ""} onChange={handleChange}/>
                        </div>
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="emailId" type="text" placeholder="Email Id" value={userInput.emailId || ""} onChange={handleChange}/>
                        </div>
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={handleChange}/>
                        </div>
                        <div className="px-5 flex gap-5">
                            <input className="p-2 border rounded-lg" name="isOrganizer" type="checkbox" onChange={handleOrganizerValue}/>
                            <label htmlFor="isOrganizer">Are you going to organize tournaments?</label>
                        </div>
                        <div className={`${isOrganizerValue ? "" : "hidden"} grid gap-5`}>
                        <div>
                                <input className="p-2 border rounded-lg w-full text-center md:text-start" name="organizerName" type="text" placeholder="Organizer Name" value={userInput.organizerName || ""} onChange={handleChange}/>
                            </div>
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
                        <div className="flex justify-center">
                            <button className="p-2 rounded-lg bg-[#4C51BF] text-white" onClick={handleSignUp}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default SignUp