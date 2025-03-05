import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LoadingCard(){

    let [display, setDisplay] = useState(0);

    let message = useSelector(state => state.loadingReducer.message)

    useEffect(()=>{

        if(message){
            setDisplay(1);
        }else{
            setDisplay(0)
        }

    },[message]);

    return(
        <div className={` ${ display ? "visible" : "invisible" }  fixed top-[50%] left-[50%]`}>
            <button type="button" class="bg-indigo-500 flex p-5 rounded-md text-white" disabled>
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
            </button>
        </div>
    )
};

export default LoadingCard;