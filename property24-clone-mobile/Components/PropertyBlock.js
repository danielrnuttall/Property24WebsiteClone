import React from 'react';
import {StyleSheet,} from 'react-native';
import {Card, Title, Subheading, Paragraph } from 'react-native-paper';

const PropertyBlock = props => {
  const navigation = props.navigation;

  return(
    <Card onPress={() => navigation.dispatch("ViewProperty")} {...props} styles={styles.Card}>
      <Card.Cover style={styles.PropertyImage} source={props.source} />
      <Card.Content>
        <Title style={styles.TextTitle}>{props.title}</Title>
        <Subheading style={styles.TextPrice}>{props.name}</Subheading>
        <Paragraph style={styles.TextParagraph}>{props.price}</Paragraph>
    </Card.Content>
    </Card>
  )
}


const styles = StyleSheet.create({
  Card: {
    marginVertical: 10,
    padding: 10
  },

  PropertyImage: {
    height: 150,
    resizeMode: 'center',
  },

  TextTitle: {
    fontSize: 18,
  },

  TextPrice: {
    fontWeight: "bold",
    fontSize: 12,
  },

  TextParagraph: {
    fontSize: 10,    
  }
});

export default PropertyBlock;