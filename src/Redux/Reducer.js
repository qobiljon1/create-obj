const initialState = {
    name: "",
    age: "",
    position: "",
    club: "",
    salary: "",
    developer: ""
}
function reducer(state = initialState, action) {
    let newState = { ...state }

    switch (action.type) {

        case "GET_ALL_INFO": newState = action.payload; break;

        default:
            return state
    }
    return newState;
}
export default reducer;