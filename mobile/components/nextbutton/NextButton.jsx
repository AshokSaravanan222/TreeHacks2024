import React from 'react';
import { Icon, Text } from '@rneui/themed';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const NextButton = ({ navigateTo }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={navigateTo}>
      <Text style={styles.buttonText}>Next</Text>
      <Icon
        color={COLORS.tertiary} // Assuming you have a white color for contrast
        name="arrow-forward" // Changed for a more intuitive icon, adjust as necessary
        size={20} // Adjust size as needed
        type="material"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Align icon and text horizontally
    justifyContent: 'center', // Center content
    alignItems: 'center', // Align items vertically
    backgroundColor: COLORS.primary, // Use a primary color for visibility
    padding: 10, // Add padding to increase touchable area
    borderRadius: 20, // Round the corners
    margin: 10, // Add margin to separate from other UI elements
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.23, // Shadow opacity for iOS
    shadowRadius: 2.62, // Shadow radius for iOS
  },
  buttonText: {
    color: COLORS.tertiary, // Text color that contrasts with the button color
    marginLeft: 5, // Space between icon and text
    fontSize: 16, // Adjust font size for visibility
  },
});

export default NextButton;
