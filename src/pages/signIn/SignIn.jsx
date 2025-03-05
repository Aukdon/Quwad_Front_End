import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { signInAPI } from "../../api/authentication.js";
import { useDispatch } from "react-redux";
import AlertCard from "../../components/cards/alertCard/alertCard.jsx";

function SignIn(){

    let dispatch = useDispatch()

    let [signInCredentials,setSignInCredentials] = useState({});
    let navigate = useNavigate();

    function handleChange(e){
        setSignInCredentials({
            ...signInCredentials,
            [e.target.name] : e.target.value,
        });
    };

    async function handleSignIn(e){
        e.preventDefault();
        // console.log(signInCredentials);
        let data = await signInAPI(signInCredentials);
        // console.log(data);
        if(data.code){
            // Store token in localstorage
            localStorage.setItem("token", data.token);
            navigate("/");
            // dispatch({type:"displayAlert", message:"Logged in. Loading data."});
        }else{
            // alert(data.msg);
            dispatch({type:"displayAlert", message:data.msg});
        }
    }

    return(
        <div className="grid grid-cols-12 min-h-dvh items-center text-center md:text-start">

            <AlertCard />
            
            <div className="col-start-3 col-span-8 grid gap-5 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-[64px] text-[#4C51BF] font-semibold">Quwad</h1>
                    <p>The Ultimate Platform for Every Sport.</p>
                    <p>Don't have an account? <Link to="/signup" className="text-[#4299E1]">Sign up</Link>.</p>
                </div>
                
                <div>
                    <form action="submit" className="grid gap-5">
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="emailId" type="text" placeholder="Email Id" value={signInCredentials.emailId || ""} onChange={handleChange}/>
                        </div>
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="password" type="password" placeholder="Password" value={signInCredentials.password || ""} onChange={handleChange}/>
                        </div>
                        <div className="flex justify-center">
                            <button className="p-2 rounded-lg bg-[#4C51BF] text-white" onClick={handleSignIn}>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default SignIn