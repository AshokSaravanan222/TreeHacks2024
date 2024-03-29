import React from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode, } from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";

export default function App({text}) {


  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>
        Open up App.jsx to start working on your app!
      </Text>
      <Text>{text}</Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
