// set inital value of state to an empty array. Our posts will be an array so creating an empty array

export default (posts = [], action) => {

    //rather than have multiple if statements, use switch statement
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        // for CREATE we already have an array of posts (which is the global state), we need to spread it and add the new post
        case 'CREATE':
            return [...posts, action.payload];

        case 'UPDATE':
            // since map returns an array we can loop over entire posts array, check if returned payload has same id (which means we updated it)
            // and then replace that one post with the updated one
            return posts.map((post) => (
                post._id === action.payload._id ? action.paylod : post
            ));

        default:
            return posts;


    }
}