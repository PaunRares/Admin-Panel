const initialState = {
    loading: false,
    posts: [],
    error: null
}
function postReducer(state=initialState, action) {
    switch(action.type) {
        case 'START_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_POSTS':
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case 'UPDATE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}
export default postReducer;