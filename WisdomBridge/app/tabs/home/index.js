import React from 'react'
import { Text } from '@rneui/themed';
import Component from "../../../components/MyComponent";
import { SafeAreaView, FlatList } from 'react-native';
import ProfileCard from '../../../components/common/profileCard/ProfileCard';
import { useRouter } from 'expo-router';

const profileData = {"items" : [
  {
    "id" : "456",
    "name": "Ash2",
    "age": 42,
    "zipCode" : "53189",
    "phoneNumber": "2328992272",
    "bio" : "Short Bio"
  },
  {
    "id" : "23423",
    "name": "Joe",
    "age": 23,
    "zipCode" : "23424",
    "phoneNumber": "2328992272",
    "bio" : "Longer Bio"
  }
]
}

const Home = () => {

  const router = useRouter();

  return (
    <SafeAreaView>
      <FlatList 
        data = {profileData.items}
        renderItem={({item}) => <ProfileCard profile={item} onPress={() => router.push({
          pathname: "profile",
          params: {id: item.id, name: item.name, age: item.age, phoneNumber: item.phoneNumber, phoneNumber: item.phoneNumber, bio: item.bio}
      })}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text>These are the profiles</Text>
        }
      />
    </SafeAreaView>

  )
}

export default Home;