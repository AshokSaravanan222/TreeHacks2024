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

    <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Add horizontal padding to the container
    }}>
    <Heading text={"We will ask a few questions to get to know you."}/>
    <Text style={{fontSize: 20, fontWeight: 300, padding: 30}}>{"Note that you can skip the questions asked if you do not feel comfortable answering them."}</Text>

    <NextButton navigateTo={() => router.push("survey")} />
    </View>

  )
}

export default Info;