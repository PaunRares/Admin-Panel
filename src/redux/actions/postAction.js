export function startLoading() {
    return {
        type: 'START_LOADING'
    }
}
export function updatePosts(payload) {
    return {
        type: 'UPDATE_POSTS',
        payload
    }
}
export function updateError(payload) {
    return {
        type: 'UPDATE_ERROR',
        payload
    }
}
export function fetchPosts(){
    return function(dispatch) {
        dispatch(startLoading());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respons => respons.json())
        .then(posts => {
            posts = posts.filter((elem, index) => index < 6)
            dispatch(updatePosts(posts))
        })
        .catch(error => dispatch(updateError(error)))

    }
}