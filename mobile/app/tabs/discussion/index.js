import React, { useState, useEffect } from 'react';
import {SafeAreaView, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using react-navigation
import MentorMentee from '../../../components/mentormentee/MentorMentee';
import { Text } from '@rneui/themed';
// Removed unused imports for clarity

const userData = {
  "items": [
    {
      "name": "Leonardo Fibonacci",
      "age": 84,
      "zipcode": "94016",
      "experiences_to_share": "Discovering patterns in nature and applying mathematical principles.",
      "key_skill_to_teach": "Mathematical thinking and application.",
      "personality": "Analytical, curious, insightful",
      "activity_to_try": "Math puzzles and games",
      "valued_advice": "Nature is the best teacher."
    },
    {
      "name": "Grace Hopper",
      "age": 63,
      "zipcode": "90210",
      "experiences_to_share": "Pioneering computer programming and developing early compilers.",
      "key_skill_to_teach": "Programming fundamentals and computational thinking.",
      "personality": "Innovative, persistent, clear",
      "activity_to_try": "Coding bootcamp",
      "valued_advice": "The most dangerous phrase in the language is, 'We've always done it this way.'"
    },
    {
      "name": "Steve Rogers",
      "age": 67,
      "zipcode": "10001",
      "experiences_to_share": "Leading teams through adversity and championing justice.",
      "key_skill_to_teach": "Teamwork and ethical leadership.",
      "personality": "Brave, honorable, selfless",
      "activity_to_try": "Team-building exercises",
      "valued_advice": "Do the right thing, even when it's hard."
    }
  ]
};

const Discussion = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // Assuming you will fetch some data and store it in state
  const [data, setData] = useState([]);

  // I've removed the fetch logic for brevity, make sure to include your fetch logic here
  useEffect(() => {
    // Fetch your data here
    // For demonstration, let's use the static `userData`
    setData(userData.items); // You would fetch data here
  }, []);

  // If isLoading is true, show loading indicator
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  // If there is an error, show error message
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  // Main content
  return (
    <SafeAreaView style={styles.container}>
      <MentorMentee data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default Discussion;