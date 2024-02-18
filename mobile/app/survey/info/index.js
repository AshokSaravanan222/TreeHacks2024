import React, {useState} from 'react'
import { View } from 'react-native'
import { Text, Button, Input} from '@rneui/base'

import { useRouter } from 'expo-router'
import Heading from '../../../components/heading/Heading'
import NextButton from "../../../components/nextbutton/NextButton.jsx"

const Info = () => {

  const [name, setName] = useState("")
  
  const router = useRouter();

  return (

    <View style={{flex: 1,
        alignItems: "center",
        justifyContent: "center",}}>
    <Heading text={"I will ask a few questions to get to know you."}/>
    <Text >{"Note that you can skip the question"}</Text>

    <NextButton navigateTo={() => router.push("survey")} />
    </View>

  )
}

export default Info;