import React from 'react';
import * as firebase from 'firebase';
import config from  './apis/firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import Profile from './components/Profile';
import Forum from './components/Forum';
import Map from './components/Map';
import StartBeacon from './components/StartBeacon';
import Loading from './components/Loading';
import Login from './components/Login';
import CycleView from './components/CycleView';
import CalendarView from './components/CalendarView';
import EditData from './components/EditData';
// import { createMemoryHistory } from 'history';
//
// const history = createMemoryHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

firebase.initializeApp(config);

const BeaconStack = createStackNavigator({ StartBeacon: { screen: StartBeacon }, Map: { screen: Map } })
const Beacon = createAppContainer(BeaconStack);

const TrackerSwitch = createMaterialTopTabNavigator({ Cycle: CycleView, Calendar: CalendarView, EditData: EditData }, { initialRouteName: 'Cycle', swipeEnabled: true, tabBarOptions: { activeTintColor: 'pink', inactiveTintColor: 'black' } })
const Tracker = createAppContainer(TrackerSwitch);

const MainTabNav = createBottomTabNavigator({
    Profile: { screen: Profile, navigationOptions: { title: 'Profile',  headerTitle: 'My Name' } },
    Beacon: { screen: Beacon, navigationOptions: { title: 'Create Beacon',  headerTitle: 'Beacon', navigationOptions: { tabBarVisible: false } }},
    Forum: { screen: Forum, navigationOptions: { title: 'Community Forum', headerTitle: 'Forum Screen' }},
    Tracker: { screen: Tracker, navigationOptions: { title: 'Period Tracker' } } },
    { tabBarOptions: { style: { paddingBottom: '20px' }}} )
const MainContainer = createAppContainer(MainTabNav)
const AuthStack = createStackNavigator({ Login: { screen: Login, navigationOptions: { headerTitle: 'Login' } } })

const RootStack = createSwitchNavigator({ Loading: Loading, Auth: AuthStack, Main: MainContainer },
  { initialRouteName: 'Loading' });

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
