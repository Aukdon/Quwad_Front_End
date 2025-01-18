import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({data}){

    let headerType = data.headerType
    let hidden = "hidden";

    let navigate = useNavigate();

    function handleSignOut(e){
        e.preventDefault();
        localStorage.removeItem("emailId");
        localStorage.removeItem("token");
        navigate("/signin")
    }

    return(
        <header className="col-start-2 col-span-10 mt-5 p-5 bg-white border rounded-lg hidden md:block">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <h1 className="text-[32px] text-[#4C51BF] font-semibold">Quwad</h1>
                    <p>The Ultimate Platform for Every Sport.</p>
                </div>
                <div className="flex gap-5">
                    <Link to="/signin" className={`${headerType=="notHome"?hidden:""} p-2 bg-[#4C51BF] text-white border rounded-lg hover:border-[#4C51BF] hover:bg-white hover:text-[#4C51BF] flex items-center`}>Sign in</Link>
                    <Link to="/signup" className={`${headerType=="notHome"?hidden:""} p-2 bg-white text-[#4C51BF] border border-[#4C51BF] rounded-lg hover:bg-[#4C51BF] hover:text-white flex items-center`}>Sign up</Link>
                    <button className={`${headerType=="notHome"?"":hidden} p-2 bg-[#FF5A5F] text-white border rounded-lg hover:border-[#FF5A5F] hover:bg-white hover:text-[#FF5A5F]`} onClick={handleSignOut}>Sign out</button>
                </div>
            </div>
        </header>
    )
};

export default Header