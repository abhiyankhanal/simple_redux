const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state>0?state - 1:state;
        case "RESET": return initialState;
        default: return state;
    }
}

export default changeTheNumber;