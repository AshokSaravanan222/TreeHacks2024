import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '@rneui/themed';

const EnhancedInput = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <View style={styles.inner}>
          <Input 
            multiline
            numberOfLines={4}
            placeholder="Type here..."
            containerStyle={styles.input}
          />
          {/* Your other UI components */}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 10,
  },
  // Your other styles...
});

export default EnhancedInput;
