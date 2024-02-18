import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonGroup} from '@rneui/base';
import { useLocalSearchParams, useRouter } from 'expo-router';

import Heading from '../../../components/heading/Heading';
import NextButton from '../../../components/nextbutton/NextButton';
import { COLORS } from '../../../constants';

const Mentor = () => {
  const params = useLocalSearchParams();
  const { name } = params;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const router = useRouter();


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Heading text={`Nice to meet you, ${name}!`} />
        <Text style={styles.question}>Are you a mentor or a mentee?</Text>
        <ButtonGroup
          buttons={['Mentee', 'Mentor']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />
        <NextButton navigateTo={() => router.push({
        pathname: "survey/info",
        params: { role: selectedIndex == 0 ? "mentee" : "mentor" }
      })} style={styles.nextButton} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Add horizontal padding to the container
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  question: {
    marginVertical: 20,
    fontSize: 20,
    color: COLORS.tertiary
  },
  chip: {
    marginVertical: 10, // Adjust based on your design needs
  },
  nextButton: {
    paddingBottom: 20,
  },
});

export default Mentor;
