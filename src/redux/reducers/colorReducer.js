const initialState = {
    background: 'white',
    text: 'black'
}

function colorReducer(state = initialState, action){
    switch(action.type) {
        case 'CHANGE_COLOR':
           if(action.name==='background'){
               return{
                   ...state,
                   background: action.color
                }
            }else{
                return{
                    ...state,
                    text: action.color
                }
            }
        default:
            return state;
    }
}
export default colorReducer;