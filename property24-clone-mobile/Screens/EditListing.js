import * as React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {Button, Text} from 'native-base';
import ImageBlock from '../Components/ImageBlock';
import Fonts from '../Constants/Fonts';
import colors from '../Constants/colors';


export default class EditListing extends React.Component {
    state = {
        name: "5 Johnston House",
        address: "5 Morters House, Milnerton, 8001",
        price: "R2,400,000"
    }

    static navigationOptions = {
        headerTitle: "Editing Property",
    }

    render(){
        return(
            <KeyboardAvoidingView styles={styles.screen} behavior='position'>
                <ScrollView style={{padding: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.imageTitle}>Property Images</Text>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={{color: 'red'}}>Delete</Text>
                        </Button>
                    </View>
                    <ImageBlock style={{borderWidth: 1, borderColor: colors.primary}}/>
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
                            <Text style={styles.buttonText}>Submit</Text>
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