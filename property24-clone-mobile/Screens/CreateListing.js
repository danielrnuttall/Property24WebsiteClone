import * as React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {Button, Text} from 'native-base';
import ImageBlock from '../Components/ImageBlock';
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';


//REDUX IMPORTS
import {connect} from 'react-redux';
import {addProperty} from '../Redux/Actions/PropertyActions';
import {bindActionCreators} from 'redux'


class CreateListing extends React.Component {
    state = {
        name: "",
        address: "",
        price: 0,
        imageUrl: []
    }

    render(){

        const callBackFunction = (images) => {
            this.setState({imageUrl: images})
            console.log(this.state.imageUrl)
        }

        const newProperty = () => {
            this.props.createListing(this.props.user[0].email, this.state.name, this.state.address, this.state.imageUrl, this.state.price);
            this.props.navigation.goBack();
        }

        return(
            <KeyboardAvoidingView styles={styles.screen} behavior='position'>
                <ScrollView style={{padding: 10}}>
                    <Text style={styles.imageTitle}>Property Images</Text>
                    <ImageBlock parentCallBack = {callBackFunction} style={{borderWidth: 1, borderColor: colors.primary}}/>
                    <Text style={styles.propertyDetailsHeading}>Property Details</Text>
                    
                    <Card style={styles.propertyDetailsCard}>
                        <TextInput
                        style={styles.textInputs}
                        underlineColor={colors.primary}
                        selectionColor={colors.primary}
                        label="Name"
                        placeholder="3 Bedroom Modern House"
                        value = {this.state.name}
                        onChangeText={name => this.setState({ name })}
                        mode="flat"
                        />

                        <TextInput
                        style={styles.textInputs}
                        underlineColor={colors.primary}
                        selectionColor={colors.primary}
                        label="Address"
                        placeholder="5 Zaio Street, Observatory, 7441"
                        value = {this.state.address}
                        onChangeText={address => this.setState({ address })}
                        mode="flat"
                        />

                        <TextInput
                        style={styles.textInputs}
                        underlineColor={colors.primary}
                        selectionColor={colors.primary}
                        label="Price"
                        keyboardType={'numeric'}
                        placeholder="2,400,000"
                        value = {this.state.price}
                        onChangeText={price => this.setState({ price })}
                        mode="flat"
                        />
                    </Card>

                    <View style = {styles.buttonContainer}>
                        <Button onPress={() => this.props.navigation.goBack()} primary style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Button>
                        <Button bordered style={styles.button}>
                            <Text onPress={newProperty} style={styles.buttonText}>Create</Text>
                        </Button>
                    </View>
                </ScrollView>    
            </KeyboardAvoidingView>
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

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
    },

    button: {
        color: colors.primary,
        backgroundColor: colors.primary,
        marginHorizontal: 20,
        width: 100,
        justifyContent: 'center',
        alignContent: 'center'
    },

    buttonText: {
        fontFamily: Fonts.mainFont,
        color: colors.white,
    }
 
});


const mapStatesToProps = state => ({
    user: state.user
})

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        createListing: addProperty
    }, dispatch);
}

export default connect(mapStatesToProps, mapActionsToProps)(CreateListing);