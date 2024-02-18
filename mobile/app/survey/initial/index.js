import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MessageScreen = ({ message, onAdvance }) => {
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onAdvance(); // Advance after 1 second
    }, 1000);
    return () => clearTimeout(timer);
  }, [onAdvance]);

  const handleTap = () => {
    const newTapCount = tapCount + 1;
    setTapCount(newTapCount);
    if (newTapCount >= 3) {
      clearTimeout(timer); // Important to clear the timer here as well
      onAdvance(); // Advance if tapped 3 times
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleTap}>
      <Text style={styles.text}>{message}</Text>
    </TouchableOpacity>
  );
};

const WelcomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "Welcome",
    "Welcome to",
    "Welcome to Wisdom Bridge",
  ];

  const advanceScreen = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // All screens have been seen, do something here
    }
  };

  return (
    <View style={styles.fullScreen}>
      <MessageScreen
        message={messages[currentIndex]}
        onAdvance={advanceScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Example background color
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default WelcomeScreen;
