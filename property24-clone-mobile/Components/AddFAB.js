import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import colors from '../Constants/colors';

const AddFAB = () => (
  <FAB
    style={styles.fab}
    small
    icon="add"
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: colors.primary,
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default AddFAB;