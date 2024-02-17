import React from 'react'
import { Text, Button, Dialog, Input} from '@rneui/themed'
import { FlatList, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import ActivityCard from '../../../components/common/activityCard/ActivityCard'

const Activities = () => {


    const activityData = {"items": [
        {
            "id": "activity1",
            "description": "this is desc1",
            "topic": "tennis"
        },
        {
            "id": "activity2",
            "description": "this is desc2",
            "topic": "soccer"
        }
    ]}

    const router = useRouter();

    const [visible1, setVisible1] = useState(false);

    const [activityName, setActivityName] = useState("Hey")
    const [activityDescription, setActivityDescription] = useState("Hey")
    const [activityTime, setActivityTime] = useState("Hey")

    const toggleDialog1 = () => {
    setVisible1(!visible1);
    };

    async function addActivity() {
    // call the api to add
    }

  return (
    <SafeAreaView>
    <FlatList 
      data = {activityData.items}
      renderItem={({item}) => <ActivityCard activity={item}/>}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <Text>These are the activites</Text>
      }
      ListFooterComponent={
        <View>
        <Button 
            title={"Add an activity"}
            onPress={toggleDialog1}
        />
        <Dialog
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
        >
          <Dialog.Title title="Add an Activity"/>
          <Input
            placeholder="Name"
            leftIcon={{ type: 'font-awesome', name: 'comment' }}
            onChangeText={value => setActivityName(value)}
          />
          <Input
            placeholder="Description"
            leftIcon={{ type: 'font-awesome', name: 'comment' }}
            onChangeText={value => setActivityDescription(value)}
          />
          <Input
            placeholder="Time"
            leftIcon={{ type: 'font-awesome', name: 'comment' }}
            onChangeText={value => setActivityTime(value)}
          />
          <Button 
            onPress={() => {
              toggleDialog1();
              addActivity()
            }}
          />
        </Dialog>
        </View>
      }
    />
  </SafeAreaView>
  )
}

export default Activities