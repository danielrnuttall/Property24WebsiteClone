import * as React from 'react';
import {Image, View, StyleSheet, FlatList, Alert } from 'react-native';
import {Card, } from 'react-native-paper';
import {Button, Icon, Text} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import colors from '../Constants/colors';
import Fonts from '../Constants/Fonts';
import { TouchableHighlight } from 'react-native-gesture-handler';


let key = 0;

export default class ImageBlock extends React.Component {

    state = {
        images: []
    }


    deleteImage = (key) => {
        Alert.alert("Deleting Image",
        "Are you sure you want to delete that image?",
        [
            {text: "Cancel", onPress: () => console.log("Cancelled"), style: 'cancel'},
            {text: "Confirm", onPress: () => this.state.images.splice(key)}
        ]
        )
    }
  

  render() {
    let {images} = this.state;

    return (
      <Card style={styles.screen}>
          <View style={styles.ImageContainer}>
            <FlatList horizontal={true} data={images} 
            renderItem={({item, index, seperators}) => (
                <TouchableHighlight>
                    <Card style={{height: 160, width: 160, marginHorizontal: 2}}>
                        <Image source={{uri: item.uri}} style={{height: 160, width: 160, resizeMode: 'stretch', borderRadius: 12}}/>
                    </Card>
                </TouchableHighlight>
            )}
            />
          </View>
          <View style = {styles.buttonContainer}>
                <Button primary iconLeft style={styles.buttonBox} onPress={this._takeImage}>
                    <Icon name='camera' style={styles.buttonIcon}/>
                    <Text style={styles.buttonText}>Take a photo</Text>
                </Button>
                <Button bordered iconLeft style={styles.buttonBox} onPress={this._pickImage}>
                    <Icon name='image'/>
                    <Text style={styles.buttonText}>Choose a photo</Text>
                </Button>
           </View>
      </Card>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const {camstatus } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== 'granted' || camstatus !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    }
  }

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
        this.setState({
            images: [...this.state.images, {uri: result.uri, key: key}]
        });

        key++;
    }
  };


  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
        this.setState({
            images: [...this.state.images, {uri: result.uri, key: key}]
        });

        key++;
    }
  };
}

const styles = StyleSheet.create({
    screen: {
        height: 250,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center'
    },

    ImageContainer: {
        height: 170,
    },

    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttonBox: {
        color: colors.primary,
        backgroundColor: colors.primary,
        marginHorizontal: 2,
    },

    buttonIcon: {
        color: colors.white
    },

    buttonText: {
        fontFamily: Fonts.mainFont,
        color: colors.white,
    }
});