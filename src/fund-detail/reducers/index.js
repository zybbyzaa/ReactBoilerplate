import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { tab } from './reducers';

const rootReducer = combineReducers({
    routing: routerReducer,
    tab
});

export default rootReducer;
