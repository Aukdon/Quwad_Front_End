
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

let AlertCard = ()=>{

    let dispatch = useDispatch()

    let [display, setDisplay] = useState(0);

    let message = useSelector(state => state.alertReducer.message);

    function clearAlert(){
        setDisplay(0)
        dispatch({type:"resetAlert"});
    }

    useEffect(()=>{

        if(message!==""){
            setDisplay(1);
        };

        setTimeout(clearAlert, 5000);

    },[message]);

    return(
        <div className={` ${display? "visible":"invisible"} fixed top-0 right-0 p-2 bg-yellow-500 rounded-lg`}>
            <p>{message}</p>
        </div>
    )
};

export default AlertCard