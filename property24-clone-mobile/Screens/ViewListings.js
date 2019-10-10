import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import PropertyBlock from '../Components/PropertyBlock';
import AddFAB from '../Components/AddFAB';




export default class ViewListings extends React.Component{

    static navigationOptions = ({navigation}) => {

      return{
        title: "Listings",
      }
    }


    render(){
    return(
        <View style={styles.container}>
        <FlatList
          data={[
            {key: "1", source: {uri: 'https://thepropertyboutique.files.wordpress.com/2017/03/sustainable_buildings.jpg'}, title: "21 Marksons Road, Blouberg, 7441", name: "3 Bedroom Villa", price: "R2,400,000",},
            {key: "2", source: {uri: 'https://images.prop24.com/220826887/Crop526x328'}, title: "5 Jansen Road, Milnerton, 7441", name: "2 Bedroom Seaside House", price: "R1,380,000",},
            {key: "3", source: {uri: 'https://assets.themortgagereports.com/wp-content/uploads/2018/07/featured-new-template-1.jpg'}, title: "25 Bloom Street, Cape Town, 8001", name: "4 Bedroom Modern House", price: "R4,950,000",},
            {key: "4", source: {uri: 'https://s3-ap-southeast-1.amazonaws.com/static.starproperty.my/star-properties/properties/5c526ab0963776.42301335-thehazelmeridineast/thumbnail/5d2c501c25e6f.jpg'}, title: "22 Aranstone Road, Observatory, 7661", name: "4 Room Apartment Building", price: "R7,450,000",},
          ]}
          renderItem={({item}) => <PropertyBlock style={styles.item} source={item.source} title={item.title} name={item.name} price={item.price}/>}
        />
      <AddFAB />
      
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
