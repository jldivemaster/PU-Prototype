import Main from './components/Main';
import Chat from './components/Chat';
import Map from './components/Map';
import Loading from './components/Loading';
import Login from './components/Login';
import React from 'react';
import * as firebase from 'firebase';
import config from  './apis/firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

firebase.initializeApp(config);

const MainStack = createSwitchNavigator({ Main: { screen: Main, navigationOptions: { headerTitle: 'Main' } }, Chat: { screen: Chat, navigationOptions: { headerTitle: 'Chat' }}, Map: { screen: Map, navigationOptions: { headerTitle: 'Map' }} })
const AuthStack = createStackNavigator({ Login: { screen: Login, navigationOptions: { headerTitle: 'Login' } } })

const RootStack = createStackNavigator({ Loading: { screen: Loading, navigationOptions: { headerTitle: 'Loading' } },
  Auth: AuthStack, Main: MainStack
   });

const App = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppContainer;
