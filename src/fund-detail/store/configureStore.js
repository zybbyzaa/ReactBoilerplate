import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let finalCreateStore;
// const syncHis = syncHistory(browserHistory);
const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

if (process.env.NODE_ENV === 'production') {
    finalCreateStore = compose(applyMiddleware(thunk));
} else {
    finalCreateStore = compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
}

export default function configureStore(initialState) {
    const store = finalCreateStore(createStore)(rootReducer, initialState);

    return store;
}
