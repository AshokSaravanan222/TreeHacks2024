import React from 'react';
import { Text } from '@rneui/themed';
import { useLocalSearchParams } from 'expo-router';
import { Avatar, Button, Dialog} from '@rneui/themed';
import { StyleSheet } from 'react-native';

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
      {/* in the middle */}
      <Avatar 
          size={64}
          rounded
          title={name.slice(0, 2)}
          containerStyle={{ backgroundColor: '#3d4db7' }}
        />
      <View> {/* on left hand side*/}
        <Text style={styles.name}>Name: {name}</Text>
        <Text style={styles.age}>Age: {age}</Text>
        <Text style={styles.number}>Phone Number: {phoneNumber}</Text>
      </View>

      <View> {/* on right hand side*/}
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

      {/* in the middle side*/}
      <Text style={styles.bio}>Bio: {bio}</Text>
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