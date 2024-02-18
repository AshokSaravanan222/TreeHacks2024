import React from 'react'
import { Text, Avatar } from '@rneui/themed'
import { useLocalSearchParams } from 'expo-router'
import ActionButton from '../../actionbtn/ActionButton'
import { COLORS } from '../../../constants';
import Age from '../../age/Age';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import { SIZES } from '../../../constants';

const MentorMenteeCard = ({person}) => {

    const name = person.name;
    const age = person.age;
    const curiosities = person.personality;
    const hobbies = "woodworking, soccer, tennis"
    
    const hobbiesArr = hobbies.split(",");
    const curiositiesArr = curiosities.split(",");

  return (
    <SafeAreaView >
      <View style={styles.infoContainer}>

      <Avatar // in the middle
            size={128}
            title={name?.slice(0, 2)}
            containerStyle={styles.avatar}
        />
        
        <View style={styles.tagsContainer}>
            <Text style={{fontSize: 30, fontWeight: 500, color: COLORS.secondary, paddingBottom: 20}}>{name}</Text>
        </View>
        
      <Text style={styles.category}>Hobbies</Text>
        {/* Container for hobbies tags */}
        <View style={styles.tagsContainer}>
          {hobbiesArr.map((hobby, index) => (
            <Text key={index} style={styles.tags}>{hobby.trim()}</Text>
          ))}
        </View>

        <Text style={styles.category}>Curiosities</Text>
        {/* Container for curiosities tags */}
        <View style={styles.tagsContainer}>
          {curiositiesArr.map((curiosity, index) => (
            <Text key={index} style={styles.tags}>{curiosity.trim()}</Text>
          ))}
        </View>

        <View style={[styles.tagsContainer, styles.buttons]}>
        <ActionButton 
            text = {"Connect"}
            buttonColor = {COLORS.secondary}
            onPress = {() => console.log("Pressed")}
        />
        <ActionButton 
            text = {"Dismiss"}
            buttonColor = {COLORS.gray}
            onPress = {() => console.log("Pressed")}
        />
    </View>
</View>

    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
    avatar: {
      backgroundColor: COLORS.primary,
      borderRadius: 100
    },
    personalContainer: {
      flex: 1, // Use flex to enable flexible box layout
      justifyContent: 'center', // Center content vertically in the container
      alignItems: 'center', // Center content horizontally in the container
      paddingTop: 20
      // Add any other styles for the container here (e.g., backgroundColor)
    },
    infoContainer: {
        
      // Add padding inside the container to separate the content from its borders
      padding: 20,
      // Add margin outside the container to separate it from other elements or the screen's edge
      margin: 10,
      // Optionally, you can specify marginTop, marginBottom, marginLeft, marginRight for specific directions
    },
    name: {
      fontSize: SIZES.xLarge, // larger font size for better readability
      fontWeight: 'bold', // make the name stand out
      marginTop: 20, // add space at the top for clarity
      alignSelf: 'center', // center align the name
    },
    age: {
      fontSize: 18,
      marginTop: 5, // space out the age from the name
      alignSelf: 'center',
    },
    number: {
      fontSize: 18,
      marginTop: 5, // space out the phone number from the age
      alignSelf: 'center',
    },
    hobbies: {
      fontSize: 16,
      marginTop: 5, // space out the bio
      alignSelf: 'center',
    },
    category: {
      overflow: 'hidden',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'left',
      color:'rgb(0,0,0)',
    },
    dialogStyle: {
      padding: 20, // padding inside the dialog
    },
    tags: {
      backgroundColor: COLORS.primary, // Use the primary color from your constants
      paddingHorizontal: 8, // Use minimal horizontal padding
      paddingVertical: 4, // Use minimal vertical padding for spacing
      margin: 5, // Optional: add margin to separate it from other components
      borderRadius: 5, // Optional: add rounded corners for a smoother look
      borderWidth: 1, // Add a border for the bordered look
      borderColor: 'rgba(0, 0, 0, 0.1)', // Slightly visible border
      alignSelf: 'flex-start', // Align to the start of the flex container
    },
    tagsContainer: {
      flexDirection: 'row', // Align tags horizontally
      flexWrap: 'wrap', // Allow tags to wrap to the next line
      // Add padding or margin if needed to adjust the spacing inside or outside the container
    },
    itemContainer: {
      flexDirection: 'row', // Align items horizontally
      alignItems: 'center', // Center items vertically within the row
      marginBottom: 15, // Add some space between each item
      backgroundColor: COLORS.primary, // Optional: background color for contrast
      padding: 10, // Padding inside each item for spacing
      borderRadius: 15,
    },
    activityImage: {
      width: 60, // Fixed width for images
      height: 60, // Fixed height for images
      borderRadius: 10, // Make the image rounded
      marginRight: 10, // Space between image and text
    },
    itemTextContainer: {
      flex: 1, // Take up the remaining space
    },
    itemTitle: {
      fontWeight: 'bold', // Make title bold
      fontSize: 16, // Slightly larger font for the title
      marginBottom: 5, // Space between title and date
    },
    itemDate: {
      fontSize: 14, // Smaller font for the date
    },
    buttons: {
      paddingTop: 10
    }
    // Add any additional styles you might need
  });


export default MentorMenteeCard