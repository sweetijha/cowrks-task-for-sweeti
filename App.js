import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar,Platform } from 'react-native';
import { Constants } from 'expo';
import AppNavigation from './AppNavigation';
import { Icon } from 'react-native-elements';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const tabWidth = deviceWidth - 10;
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default class App extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (     
         <View style={styles.container}>
        <MyStatusBar backgroundColor="#00aced" barStyle="light-content" />
        <AppNavigation />
        </View>
      
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

