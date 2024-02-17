import React from 'react'
import { createTheme, ThemeProvider } from "@rneui/themed";
import { Slot} from 'expo-router';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <Slot />
        </ThemeProvider>
      )
}

