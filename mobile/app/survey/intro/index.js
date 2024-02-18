import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '@rneui/base';
import { useRouter } from 'expo-router';

import Heading from '../../../components/heading/Heading';
import NextButton from '../../../components/nextbutton/NextButton';

const Intro = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Heading text={"Hello! What's your name?"} />
        <Input
          placeholder="Type your name here"
          onChangeText={value => setName(value)}
          containerStyle={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NextButton navigateTo={() => router.push({
          pathname: "survey/mentetor",
          params: { name: name }
        })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Pushes content to center and button to bottom
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Adds room on the sides
  },
  input: {
    width: '100%', // Ensures input takes full width of its container
    marginTop: 20, // Adds space between the heading and the input
  },
  buttonContainer: {
    paddingBottom: 20, // Adds some padding at the bottom
    paddingHorizontal: 20, // Adds some padding on the sides
  },
});

export default Intro;
