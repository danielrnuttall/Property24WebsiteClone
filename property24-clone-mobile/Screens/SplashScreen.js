import React from 'react';
import {View, Text, Image, StyleSheet,} from 'react-native';

const screenTime = 1500;

export default class SplashScreen extends React.Component{

  componentDidMount(){
    setTimeout(() => { this.props.navigation.replace('Login');}, screenTime);
  }

  render(){
    return(
        <View style={styles.Screen}> 
          <Image resizeMode='center' style={styles.img} source={ {uri:'https://www.conduitinterior.co.za/media/property24_2017.png'}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  Screen: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1  
  },

  img: {
  width: undefined,
  height: 100,
  alignSelf: 'stretch',
  marginHorizontal: 40},
});