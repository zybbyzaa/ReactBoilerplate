import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import { FundDetail, FundManager, FundAssets } from './containers';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/fundDetail.html" component={FundDetail} />
            <Route path="/fundManager/:managerId.html" component={FundManager}/>
            <Route path="/fundAssets/:fundCode.html" component={FundAssets}/>
        </Router>
    </Provider>, document.getElementById('root')
);