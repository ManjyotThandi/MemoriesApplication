// set inital value of state to an empty array. Our posts will be an array so creating an empty array

export default (posts = [], action) => {

    //rather than have multiple if statements, use switch statement
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}