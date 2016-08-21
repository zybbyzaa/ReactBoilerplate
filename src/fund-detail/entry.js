import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import configureStore from './store/configureStore';
import showDevTools from './containers/showDevTools';
import { App, FundDetail, FundManager, FundAssets } from './containers';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={FundDetail}/>
                <Route path="fundManager" component={FundManager}>
                <Route path="fundAssets" component={FundAssets}>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
    showDevTools(store);
}
