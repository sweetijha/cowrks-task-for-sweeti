import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
import { Icon } from 'react-native-elements';
const deviceHeight = Dimensions.get('window').height;
const tabWidth = deviceWidth - 10;
export default class Feed extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={{textAlign:'center'}}>Feed</Text>
        <View style={styles.dim}>
        <Image
          style={styles.bottomImage}
          source={require('../bottab.png')}
        />
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.singleTab} activeOpacity={1.0} onPress={() => this.props.navigation.navigate('Feed')}>
            <Icon name="library-books" color="#00aced" />
            <Text style={[styles.tabText, styles.activeColor]}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleTab} activeOpacity={1.0} onPress={() => this.props.navigation.navigate('Services')}>
            <Icon name="playlist-add" color="#000000" />
            <Text style={styles.tabText}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleTab} activeOpacity={1.0} onPress={() => this.props.navigation.navigate('Access')}>
            <View style={styles.centerTab}>
              <Text style={styles.centerText}>Access</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleTab} activeOpacity={1.0} onPress={() => this.props.navigation.navigate('Marketplace')}>
            <Icon name="add-shopping-cart" color="#000000" />
            <Text style={styles.tabText}>Marketplace</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleTab} activeOpacity={1.0} onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="contacts" color="#000000" />
            <Text style={styles.tabText}>Profile</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dim: {
    position : 'absolute',
    bottom : -10,
    left : 0
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 5,
    bottom: 20,
    width: tabWidth,
    height : 70
  },
  singleTab: {
    width: tabWidth / 5,
    height: 70,
    alignItem: 'center',
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
    fontSize:12
  },
  centerTab: {
    width: tabWidth / 6,
    height: tabWidth / 6,
    backgroundColor: '#00aeef',
    transform: [{ rotate: '45deg' }],
    borderRadius: 15,
    position: 'absolute',
    bottom: 60,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation : 10
  },
  centerText: {
    color: 'white',
    transform: [{ rotate: '-45deg' }],
    position: 'relative',
    left: 0,
    top: 10,
  },
  bottomImage:{
    width: deviceWidth,
    height : 100,
    position : 'absolute',
    bottom: 5,
    left: 0
    
  },
  activeColor : {
    color : '#00aeef'
  }
});