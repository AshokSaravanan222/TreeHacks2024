import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Chip, Input } from '@rneui/base';
import { useLocalSearchParams, useRouter } from 'expo-router';

import Heading from '../../../components/heading/Heading';
import NextButton from '../../../components/nextbutton/NextButton';

const Mentor = () => {
  const params = useLocalSearchParams();
  const { name } = params;

  const [isChipOneEnabled, setChipOneEnabled] = useState(false);
  const [isChipTwoEnabled, setChipTwoEnabled] = useState(false);

  const router = useRouter();

  // Handler function to enable Chip One and set state variable
  const handleChipOnePress = () => {
    setChipOneEnabled(true);
    setChipTwoEnabled(false);
  };

  // Handler function to enable Chip Two and set state variable
  const handleChipTwoPress = () => {
    setChipTwoEnabled(true);
    setChipOneEnabled(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Heading text={`Nice to meet you, ${name}!`} />
        <Text style={styles.question}>Are you a mentor or a mentee?</Text>
        <Chip
          title="Mentee"
          disabled={!isChipOneEnabled}
          onPress={handleChipOnePress}
          containerStyle={styles.chip}
        />
        <Chip
          title="Mentor"
          disabled={!isChipOneEnabled}
          onPress={handleChipTwoPress}
          containerStyle={styles.chip}
        />
      </View>
      <NextButton navigateTo={() => router.push({
        pathname: "survey/info",
        params: { role: isChipOneEnabled ? "mentee" : "mentor" }
      })} style={styles.nextButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  question: {
    marginVertical: 20,
  },
  chip: {
    marginVertical: 10, // Adjust based on your design needs
  },
  nextButton: {
    paddingBottom: 20,
  },
});

export default Mentor;
