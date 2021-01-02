import { combineReducers } from 'redux';

import posts from './posts';


// export a function which takes an object. The object contains all the reducers you want to combine
export default combineReducers({
    // equiv to posts: posts
    posts
});