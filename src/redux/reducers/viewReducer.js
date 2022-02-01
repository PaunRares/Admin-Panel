const initialState = {
    view: 'users'
}
function viewReducer(state=initialState, action) {
    switch(action.type) {
        case 'CHANGE_VIEW':
            if(action.payload==='posts'){
                return{
                    ...state,
                    view: 'posts'
                }
            }else{
                return{
                    ...state,
                    view: 'users'
                }
            }
        default:
            return state
    }
}
export default viewReducer;