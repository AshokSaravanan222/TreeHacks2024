import { Button } from '@rneui/base'
import React from 'react'
import { SafeAreaView } from 'react-native'

// use expo-audio to help with this
// we can call it with our backend chroma db. 
// if you could create a function that would call an API with the proper audio data, we can handle audio on backend
// if it is easeir, intergrate OPEN AI WHISPER directly

const Voice = () => {
  return (
    <SafeAreaView>
        <Button>Record Your Thoughts!</Button>
    </SafeAreaView>
  )
}

export default Voice