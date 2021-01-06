// set inital value of state to an empty array. Our posts will be an array so creating an empty array

export default (posts = [], action) => {

    //rather than have multiple if statements, use switch statement
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        
        // for CREATE we already have an array of posts (which is the global state), we need to spread it and add the new post
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}