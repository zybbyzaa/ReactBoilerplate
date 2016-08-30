import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { tab,chart } from './reducers';

const rootReducer = combineReducers({
    routing: routerReducer,
    tab,
    chart
});

export default rootReducer;
