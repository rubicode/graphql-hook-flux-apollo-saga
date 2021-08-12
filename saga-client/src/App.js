import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import UserBox from './components/UserBox'
import UserForm from './components/UserForm'
import history from './history'

import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/users'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={UserBox} />
            <Route path="/add" component={UserForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
