
let initialState = {
    message: "",
    display: 0
};

let loadingReducer = (state=initialState, action)=>{

    switch (action.type) {
        case "displayLoading":
            return{
                ...state,
                message: "Loading",
                display: 1,
            };
        
        case "resetLoading":
            return{
                ...state,
                message: "",
                display: 0
            }
            
        default:
            return initialState;
    }

}

export default loadingReducer;