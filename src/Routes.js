import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Default from './pages/Default';
import Wrap from './components/Wrap';
import UserLogin from './components/user/Login';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import CreateContainer from './containers/CreateContainer';
import SearchContainer from './containers/SearchContainer';
import NotFoundPage from './components/NotFoundPage';
import createLogger from 'redux-logger';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

class Routes extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <Wrap>
           <Switch>
             <Route path="/login" component={UserLogin} />
             <Route path="/search" component={SearchContainer} />
             <Route path="/dash" component={CreateContainer} />
             <Route path="/home" component={SearchContainer} />
             <Route path="/" component={UserLogin} />
             <Route path="*" component={NotFoundPage}/>
           </Switch>
          </Wrap>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default Routes;
