

let initialState = {
    message:"",
    display: 0
};

let alertReducer = (state=initialState, action) =>{
    switch (action.type){
        case "displayAlert":
            return{
                ...state,
                message: action.message,
                display: 1,
            };
        case "resetAlert":
            return{
                ...state,
                message:"",
                display: 0
            };
        default:
            return state;

    }
}

export default alertReducer
