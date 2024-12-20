import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp(){

    let [isOrganizerValue, setIsOrganizerValue] = useState(false)

    function handleOrganizerValue(){
        setIsOrganizerValue(!isOrganizerValue);
    }

    function handleSignUp(e){
        e.preventDefault();
        console.log(isOrganizerValue);
        
    }

    return(
        <div className="grid grid-cols-12 min-h-dvh items-center text-center md:text-start">
            
            <div className="col-start-3 col-span-8 grid gap-5 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-[64px] text-[#4C51BF] font-semibold">Quwad</h1>
                    <p>The Ultimate Platform for Every Sport.</p>
                    <p>Already have an account? <Link to="/signin" className="text-[#4299E1]">Sign in</Link>.</p>
                </div>

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
                        <div className="px-5 flex gap-5">
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