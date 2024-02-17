import React from 'react'
import { createTheme, ThemeProvider } from "@rneui/themed";
import { Slot} from 'expo-router';
import { MaterialCommunityIcons} from '@expo/vector-icons'; 

const theme = createTheme({
  lightColors: {
    BLUE: "#03396C"
  },
  darkColors: {},
});

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
          <Tabs screenOptions={{
            headerRight: () => (
              <MaterialCommunityIcons
                  name={'account'}
                  color={theme.lightColors.BLUE}
                  size={24}
                  style={{padding: 10}}
                  onPress={() => router.push({
                    pathname: "profile",
                    params: {id: "456", name: "name", age: 34, zipCode: "53189", phoneNumber: "16241213213", bio: "hey!"}
                })}
                />
            ),
            headerTitle: "",
            headerStyle: { backgroundColor: theme.lightColors.BLUE},
          }}
          >
          <Tabs.Screen
        // Name of the route to hide.
            name="tabs/home"
            options={{
              // This tab will no longer show up in the tab bar.
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
        // Name of the route to hide.
            name="tabs/event"
            options={{
              // This tab will no longer show up in the tab bar.
              title: "Activities",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="play" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
        // Name of the route to hide.
        name="tabs/discussion"
        options={{
          // This tab will no longer show up in the tab bar.
          title: "Live",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="talk" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          // Name of the route to hide.
          name="survey"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
          </Tabs>
        </ThemeProvider>
      )
}

