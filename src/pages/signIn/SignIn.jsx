import { Link } from "react-router-dom"

function SignIn(){

    function handleSignIn(e){
        e.preventDefault();
    }

    return(
        <div className="grid grid-cols-12 min-h-dvh items-center text-center md:text-start">
            
            <div className="col-start-3 col-span-8 grid gap-5 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-[64px] text-[#4C51BF] font-semibold">Quwad</h1>
                    <p>The Ultimate Platform for Every Sport.</p>
                    <p>Don't have an account? <Link to="/signup" className="text-[#4299E1]">Sign up</Link>.</p>
                </div>

                <div>
                    <form action="submit" className="grid gap-5">
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="emailId" type="text" placeholder="Email Id"/>
                        </div>
                        <div>
                            <input className="p-2 border rounded-lg w-full text-center md:text-start" name="password" type="password" placeholder="Password"/>
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