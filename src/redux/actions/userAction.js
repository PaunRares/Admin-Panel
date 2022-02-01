export function startLoading() {
    return {
        type: 'START_LOADING'
    }
}
export function updateUser(payload) {
    return {
        type: 'UPDATE_USERS',
        payload
    }
}
export function updateError(payload) {
    return{
        type: 'UPDATE_ERROR',
        payload
    }
}
export function removeUser(payload) {
    return {
        type: 'REMOVE_USER',
        payload
    }
}
function randomSalary(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
  }
export function fetchUsers(){
    return function(dispatch) {
        dispatch(startLoading())
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respons => respons.json())
        .then(users => {
            users = users.filter((elem, index) => {
                elem.isGoldClient = elem.id % 2 === 0 ? true : false
                elem.salary = randomSalary(3000, 6000)
                return index < 6;
            })
            dispatch(updateUser(users))
        })
        .catch(error => dispatch(updateError(error)))
    }
}