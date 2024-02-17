import React, {useState} from 'react';
import { Text } from '@rneui/themed';
import { useLocalSearchParams } from 'expo-router';
import { Avatar, Button, Dialog, Input} from '@rneui/themed';
import { StyleSheet, ScrollView, View} from 'react-native';

const Profile = () => {

  const params = useLocalSearchParams();
  const {id, name, age, zipCode, phoneNumber, bio} = params;

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
          rounded
          title={name?.slice(0, 2)}
          containerStyle={{ backgroundColor: '#3d4db7' }}
        />
      <View>
        <Text style={styles.name}>{`Name: ${name}`}</Text>
        <Text style={styles.age}>{`Age: ${age}`}</Text>
        <Text style={styles.number}>{`Phone Number: ${phoneNumber}`}</Text>
      </View>

      <View>
        <Button
          title={'Connect'}
          onPress={toggleDialog1}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Dialog
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
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
      
      <Text style={styles.bio}>{`Bio: ${bio}`}</Text>
    </ScrollView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  name: {

  },
  age: {

  },
  number: {

  },
  bio: {

  }
})