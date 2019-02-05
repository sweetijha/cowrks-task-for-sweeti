import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Feed from './pages/Feed';
import Services from './pages/Services';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';

const App = createAppContainer(

  createStackNavigator({
    Feed: { screen: Feed },
    Marketplace: { screen: Marketplace },
    Services: { screen: Services },
    Profile: { screen: Profile },


  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })
);

export default App;
