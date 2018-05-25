import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount(){
      var config = {
        apiKey: "AIzaSyDAGQsKxpbbv80uc0U6hTGSL5QfV14ujjM",
        authDomain: "manager-89541.firebaseapp.com",
        databaseURL: "https://manager-89541.firebaseio.com",
        projectId: "manager-89541",
        storageBucket: "manager-89541.appspot.com",
        messagingSenderId: "922798444061"
      };
      firebase.initializeApp(config);
    }
    render(){
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <Provider store={store}>
            <Router />
        </Provider>
      );
  }
}

export default App;
