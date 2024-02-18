import React, {useState} from 'react';
import { Text, Button, Dialog, Input} from '@rneui/themed'
import { FlatList, SafeAreaView, View } from 'react-native'

import QuestionCard from '../../../components/common/questionCard/QuestionCard'
import { router } from 'expo-router'

const Discussion = () => {

    const questionData = { "items" : [
        {
            "question" : "How does one play tennis?",
            "profile": {
                "id" : "456",
                "name": "Ash2",
                "age": 42,
                "zipCode" : "53189",
                "phoneNumber": "2328992272",
                "bio" : "Short Bio"
            }
        },
        {
            "question" : "How do I catch a dub?",
            "profile": {
                "id" : "23423",
                "name": "Joe",
                "age": 23,
                "zipCode" : "23424",
                "phoneNumber": "2328992272",
                "bio" : "Longer Bio"
            }
        }
    ]
    }

    const [question, setQuestion] = useState("There was no question.");

    const [visible1, setVisible1] = useState(false);
  
    const toggleDialog1 = () => {
      setVisible1(!visible1);
    };

    async function addQuestion() {
        // call the api to add
    }

  return (
    <SafeAreaView>
      <FlatList 
        data = {questionData.items}
        renderItem={({item}) => <QuestionCard question = {item.question} profile={item.profile} onPress={() => router.push({
            pathname: "profile",
            params: {id: item.profile.id, name: item.profile.name, age: item.profile.age, phoneNumber: item.profile.phoneNumber, phoneNumber: item.profile.phoneNumber, bio: item.profile.bio}
        })}/>}
        keyExtractor={item => item.profile.id}
        ListHeaderComponent={
          <Text>These are the discussions</Text>
        }
        ListFooterComponent={
            <View>
            <Button 
                title={"Add a question"}
                onPress={toggleDialog1}
            />
            <Dialog
              isVisible={visible1}
              onBackdropPress={toggleDialog1}
            >
              <Dialog.Title title="Your Question"/>
              <Input
                placeholder="Question"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => setQuestion(value)}
              />
              <Button 
                onPress={() => {
                  toggleDialog1();
                  addQuestion()
                }}
              />
            </Dialog>
            </View>
          }
      />
    </SafeAreaView>
  )
}

export default Discussion