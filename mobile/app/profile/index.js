import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, View, SafeAreaView, FlatList, Image } from 'react-native';
import { Avatar, Button } from '@rneui/themed';
import { useLocalSearchParams } from 'expo-router';
import uuid from 'react-native-uuid';
import { COLORS, FONT, SIZES } from '../../constants';

const activities = {
  "items": [{
    "date": "02-05-03",
    "name": "Picnic",
    "imgUrl": "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg"
  },
  {
    "date": "02-05-03",
    "name": "Picnic",
    "imgUrl": "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg"
  }]
};

const Profile = () => {
  const params = useLocalSearchParams();
  const { id, name, status, age, zipCode, phoneNumber, hobbies, curiosities, pastActivities } = params;

  const hobbiesArr = hobbies.split(",");
  const curiositiesArr = curiosities.split(",");

  const [isConnectLoading, setIsConnectLoading] = useState(false);
  const [btnTitle, setBtnTitle] = useState("Connect");
  const [buttonColor, setButtonColor] = useState(COLORS.secondary); // Default color
  const [data, setData] = useState(null); // Data from the API
  const [isLoading, setIsLoading] = useState(false); // Loading state for the API call
  const [error, setError] = useState(null); // Error state for the API call

  const uuidv4 = uuid.v4();

  const handlePress = async () => {
    setIsConnectLoading(true);
    setTimeout(() => {
      setIsConnectLoading(false);
      setBtnTitle("Pending");
      setButtonColor(COLORS.tertiary);
    }, 2000);
  };

  const Item = ({ title, date, imgUrl }) => (
    <View style={styles.itemContainer}>
      {imgUrl ? (
        <Image
          source={{ uri: imgUrl }}
          style={styles.activityImage}
          resizeMode="cover"
        />
      ) : null}
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDate}>{date}</Text>
      </View>
    </View>
  );

  async function getUser(id, role) { // Add role parameter to the function
    setIsLoading(true); // Start loading before fetching data
    setError(null); // Reset error state
    try {
      const response = await fetch(`http://10.19.178.115:3000/user/${id}?role=${role}`, { // Include role in the query string
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) throw new Error('Something went wrong!'); // Check if the response is ok
      const result = await response.json();
      console.log(result);
      setData(result);
      setIsLoading(false); // Stop loading after fetching data
    } catch (error) {
      setError(error.toString()); // Set error state
      setIsLoading(false); // Stop loading on error
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    // const randomInt = getRandomInt(1, 10);
    const uuidv4 = "id3";
    const role = 'mentor'; // Define the role or get it from somewhere
    getUser(uuidv4, role);
  }, []);

  if (isLoading) return <Text>Loading...</Text>; // Show loading message
  if (error) return <Text>Error: {error}</Text>; // Show error message

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.personalContainer}>
        <Avatar // in the middle
            size={128}
            title={name?.slice(0, 2)}
            containerStyle={styles.avatar}
        />
        <Text style={styles.name}>{`${name}`}</Text>
        <Text style={styles.status}>{`${status}`}</Text>
        <Text style={styles.age}>{`Age: ${age}`}</Text>
        {/* <Text style={styles.number}>{`Phone Number: ${phoneNumber}`}</Text> */}
      </View>

      <View style={styles.infoContainer}>
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

        <View style={styles.pastActivities}>
        <Text style={styles.category}>{`Past Activities`}</Text>
        <FlatList
          data={activities.items}
          renderItem={({item}) => <Item title={item.name} date={item.date} imgUrl={item.imgUrl} />}
          horizontal
        />
      </View>
      </View>


      <View style={styles.personalContainer}>
      <Button
        buttonStyle={{ width: 250, height: 50, backgroundColor: buttonColor }}
        containerStyle={{ margin: 5, borderRadius: 10 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: COLORS.tertiary
        }}
        disabledTitleStyle={{ color: COLORS.tertiary }}
        iconContainerStyle={{ background: '#000' }}
        loading={isConnectLoading} // Use the isLoading state
        onPress={handlePress} // Use the new handlePress function
        title={btnTitle} // Hide title when loading
        titleStyle={{ marginHorizontal: 5 }}
      />
      </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;

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
  connectButton: {
    fontSize: 20, // larger font size for the button
    padding: 1, // padding inside the button
    minWidth: 150, // minimum width for the button
    alignSelf: 'center', // center align the button
    // top: 693,
    left: 113,
    width: 300,
    height: 50,
    borderRadius: 10,
    background:'rgba(254,223,205,100)',
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
  // Add any additional styles you might need
});
