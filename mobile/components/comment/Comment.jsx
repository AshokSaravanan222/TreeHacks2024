import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import { COLORS } from '../../constants';

const Comment = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary, // Light grey color
    padding: 10, // Inner padding for the text
    margin: 10, // Outer margin to separate the comments
    borderRadius: 20, // Rounded corners
    borderWidth: 1,
    borderColor: '#d0d0d0', // Light border color for definition
  },
  text: {
    color: '#333', // Dark text color for contrast
    fontSize: 40
  },
});

export default Comment;
