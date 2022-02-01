const initialState = {
    loading: false,
    users: [],
    error: null
}
function userReducer(state=initialState, action){
    switch(action.type) {
        case 'START_LOADING':
            return{
                ...state,
                loading: true
            }
        case 'UPDATE_USERS':
            return {
                ...state,
                loading: false,
                users: [...state.users,...action.payload]
            }
        case 'UPDATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'REMOVE_USER':
            const newUsers = state.users.filter(elem => elem.id !== action.payload )
            return {
                ...state,
                users: newUsers
            }
        default:
            return state;
    }
}
export default userReducer;