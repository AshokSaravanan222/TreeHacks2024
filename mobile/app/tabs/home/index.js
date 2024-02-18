import React, { useState, useEffect } from 'react';
import {SafeAreaView, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using react-navigation
import MentorMentee from '../../../components/mentormentee/MentorMentee';
import { Text } from '@rneui/themed';
import Heading from '../../../components/heading/Heading';
// Removed unused imports for clarity

const Home = () => {

  // Main content
  return (
    <SafeAreaView style={styles.container}>
      <Heading 
        text={"Home"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Home;