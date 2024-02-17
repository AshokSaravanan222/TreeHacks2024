import React from 'react'
import { View } from 'react-native'
import { Text, Button} from '@rneui/base'

import { useRouter } from 'expo-router'

const Intro = () => {

    const router = useRouter();

  return (
    <View style={{flex: 1,
        alignItems: "center",
        justifyContent: "center",}}>
    <Text>Audio Scren</Text>
    <Button 
        onPress={() => router.push("tabs/home")}
    >Click to go back home</Button>
    </View>

  )
}

export default Intro