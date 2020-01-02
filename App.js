import React from 'react';

// import APIs/backend services
import * as firebase from 'firebase';
import config from  './apis/firebase';

// import Navigation libraries
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';

// import Screens for Nav setup
import Profile from './components/Profile';
import Forum from './components/Forum';
import LocationScreen from './components/LocationScreen';
import StartBeacon from './components/StartBeacon';
import Loading from './components/Loading';
import Login from './components/Login';
import CycleView from './components/CycleView';
import CalendarView from './components/CalendarView';
import EditTrackerData from './components/EditTrackerData';
import LocationListScreen from './components/LocationListScreen';
import RequestTimeScreen from './components/RequestTimeScreen';
import RequestReviewScreen from './components/RequestReviewScreen';
import RequestEditScreen from './components/RequestEditScreen';
import ActiveBeaconScreen from './components/ActiveBeaconScreen';
import NotificationsListScreen from './components/NotificationsListScreen';
// import CompName from './components/CompName.js';
// import CompName from './components/CompName.js';

// import { createMemoryHistory } from 'history';
// const history = createMemoryHistory();

// import and set up Redux
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

// ??????? How to set initial screen to Start Beacon (initialRouteName throws error)
const BeaconStack = createStackNavigator({ StartBeacon: StartBeacon, LocationScreen: LocationScreen, LocationListScreen: LocationListScreen, RequestTimeScreen: RequestTimeScreen, RequestReviewScreen: RequestReviewScreen, RequestEditScreen: RequestEditScreen, LaunchBeacon: ActiveBeaconScreen })
const Beacon = createAppContainer(BeaconStack);

const TrackerSwitch = createMaterialTopTabNavigator({ Cycle: CycleView, Calendar: CalendarView, EditTrackerData: EditTrackerData }, { initialRouteName: 'Cycle', swipeEnabled: true, tabBarOptions: { activeTintColor: 'pink', inactiveTintColor: 'black' } })
const Tracker = createAppContainer(TrackerSwitch);

const InboxSwitch = createMaterialTopTabNavigator({ Beacon: ActiveBeaconScreen, Notifications: NotificationsListScreen }, { initialRouteName: 'Notifications', tabBarOptions: { activeTintColor: 'gray', inactiveTintColor: 'blue' } })
const Inbox = createAppContainer(InboxSwitch);

const MainTabNav = createBottomTabNavigator({
    Profile: { screen: Profile, navigationOptions: { title: 'Profile',  headerTitle: 'My Name' } },
    Beacon: { screen: Beacon, navigationOptions: { title: 'Create Beacon',  headerTitle: 'Beacon', navigationOptions: { tabBarVisible: false } }},
    Inbox: { screen: Inbox, navigationOptions: { title: 'Inbox Title' } },
    Forum: { screen: Forum, navigationOptions: { title: 'Community Forum', headerTitle: 'Forum Screen' }},
    Tracker: { screen: Tracker, navigationOptions: { title: 'Period Tracker' } } },
    { tabBarOptions: { style: { paddingBottom: '20px' }}} )
const MainContainer = createAppContainer(MainTabNav)


const AuthStack = createStackNavigator({ Login: { screen: Login, navigationOptions: { headerTitle: 'Login' } } })


const RootStack = createSwitchNavigator({ Loading: Loading, Auth: AuthStack, Main: MainContainer },
  { initialRouteName: 'Loading' });
const App = createAppContainer(RootStack);


// AppContainer is the main component for React to render
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppContainer;
