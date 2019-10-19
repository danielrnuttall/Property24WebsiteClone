import * as React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {Button, Text} from 'native-base';
import ViewImageBlock from '../Components/ViewImageBlock';
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';

//REDUX METHODS
import {connect} from 'react-redux'

class ViewListing extends React.Component {
    state = {
        name: this.props.navigation.getParam("name"),
        address: this.props.navigation.getParam("address"),
        price: this.props.navigation.getParam("price"),
        images: this.props.navigation.getParam("images", [])
    }

    static navigationOptions = {
        headerTitle: "Property Name",
    }

    render(){
        return(
        <ScrollView styles={styles.screen}>
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.imageTitle}>Property Images</Text>
                <Button transparent
                onPress={() => this.props.navigation.replace("EditListing", {name: this.state.name, address: this.state.address, images: this.state.imageUrl, price: this.state.price})}
                >
                    <Text style={{color: colors.primary}}>Edit</Text>
                </Button>
            </View>
            <ViewImageBlock images={this.state.images} style={{borderWidth: 1, borderColor: colors.primary}}/>
            <Text style={styles.propertyDetailsHeading}>Property Details</Text>
            
            <Card style={styles.propertyDetailsCard}>
                <TextInput
                style={styles.textInputs}
                underlineColor={colors.primary}
                selectionColor={colors.primary}
                label="Name"
                editable = {false}
                value = {this.state.name}
                mode="flat"
                />

                <TextInput
                style={styles.textInputs}
                underlineColor={colors.primary}
                selectionColor={colors.primary}
                label="Address"
                editable = {false}
                value = {this.state.address}
                mode="flat"
                />

                <TextInput
                style={styles.textInputs}
                underlineColor={colors.primary}
                selectionColor={colors.primary}
                label="Price"
                keyboardType='numeric'
                editable = {false}
                value = {this.state.price}
                mode="flat"
                />
            </Card>
        </View>
        </ScrollView>    

        )
    }

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
    },

    imageTitle: {
        fontSize: 20,
        fontFamily: Fonts.mainFont,
        fontWeight: 'bold',
        marginBottom: 8
    },

    propertyDetailsHeading: {
        fontSize: 20,
        fontFamily: Fonts.mainFont,
        fontWeight: 'bold',
        marginVertical: 8
    },

    propertyDetailsCard: {
        height: 200,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary
        
    },

    textInputs: {
        backgroundColor: colors.white,
        color: colors.primary,
        marginHorizontal: 30
    },

 
});



export default connect()(ViewListing);