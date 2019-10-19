import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import PropertyBlock from '../Components/PropertyBlock';
import AddFAB from '../Components/AddFAB';
import { NavigationActions } from 'react-navigation';


import { connect } from 'react-redux';




class ViewListings extends React.Component{
  constructor(props){
    super(props);
  }

    static navigationOptions = ({navigation}) => {

      return{
        title: "Listings",
      }
    }


    render(){
      const email = this.props.user[0].email; //Const used to track the current users email.

    return(
        <View style={styles.container}>
        <FlatList
          data = {this.props.properties.filter(function(property){
            return property.email == email
          })}
          renderItem={({item}) => <PropertyBlock onPress={() => this.props.navigation.navigate("ViewListing", {name: item.name, address: item.address, images: item.imageUrl, price: item.price})} style={styles.item} source={item.imageUrl} title={item.address} name={item.name} price={item.price}/>}
        />
      <AddFAB onPress={() => this.props.navigation.navigate("CreateListing")}/>
      
      </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 5,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
    
      item: {
        marginVertical: 6,
      },
});

const mapStatesToProps = state => ({
  properties: state.properties,
  user: state.user
})

export default connect(mapStatesToProps)(ViewListings);