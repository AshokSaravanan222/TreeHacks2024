import React, {useState} from 'react';
import { Text } from '@rneui/themed';
import { useLocalSearchParams } from 'expo-router';
import { Avatar, Button, Dialog, Input} from '@rneui/themed';
import { StyleSheet, ScrollView, View} from 'react-native';

const Profile = () => {
  const params = useLocalSearchParams();
  const {id, name, status, age, zipCode, phoneNumber, hobbies, curiosities, pastActivities} = params;

  const [visible1, setVisible1] = useState(false);
  const [connectMessage, setConnectMessage] = useState("Hey")

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  async function addMessage() {
    // call the api to add
  }

  return (
    <ScrollView>
      
      <Avatar // in the middle
          size={64}
          title={name?.slice(0, 2)}
          containerStyle={{ backgroundColor: '#3d4db7' }}
          style={styles.avatar}
        />
      <View>
        <Text style={styles.name}>{`${name}`}</Text>
        <Text style={styles.status}>{`${status}`}</Text>
        <Text style={styles.age}>{`Age: ${age}`}</Text>
        <Text style={styles.number}>{`Phone Number: ${phoneNumber}`}</Text>
      </View>

      <View>
        <Text style={styles.category}>{`Hobbies`}</Text>
        <Text style={styles.tags}>{`${hobbies}`}</Text>
        <Text style={styles.category}>{`Curiosities`}</Text>
        <Text style={styles.tags}>{`${curiosities}`}</Text>
      </View>

      <View>
        <Text style={styles.category}>{`Past Activities`}</Text>
        <Text style={styles.pastActivities}>{`${pastActivities}`}</Text>
      </View>

      <View>
        <Button
          title={'Connect'}
          onPress={toggleDialog1}
          buttonStyle={styles.connectButton}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Dialog
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
          overlayStyle={styles.dialogStyle}
        >
          <Dialog.Title title="Message to Connect"/>
          <Input
            placeholder="Message"
            leftIcon={{ type: 'font-awesome', name: 'comment' }}
            onChangeText={value => setConnectMessage(value)}
          />
          <Button 
            onPress={() => {
              toggleDialog1();
              addMessage()
            }}
          />
        </Dialog>
      </View>
      
    </ScrollView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    // top: 58,
    // left: 118,
    width: 152,
    height: 155,
    borderRadius: 76,
    background:'rgba(254,223,205,1)',
  },
  status: {
    // top: 70,
    left: 134,
    width: 141.5,
    height: 37.5,
    overflow: 'hidden',
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'rgba(0,0,0,1)',
  },
  name: {
    fontSize: 24, // larger font size for better readability
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
    fontFamily: 'Inter',
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
  // Add any additional styles you might need
});
