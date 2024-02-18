import React from 'react'
import { createTheme, ThemeProvider } from "@rneui/themed";
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons} from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';
import { COLORS } from '../constants';

const theme = createTheme({
  lightColors: {
    BLUE: "#03396C",
    WHITE: "#FFFFFF",
  },
  darkColors: {},
});

export default function Layout() {

  const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
          <Tabs screenOptions={{
            headerRight: () => (
              <MaterialCommunityIcons
                  name={'account'}
                  color={theme.lightColors.WHITE}
                  size={24}
                  style={{padding: 10}}
                  onPress={() => router.push({
                    pathname: "profile",
                    params: {id: "456", name: "Ashok", status:"mentee", age: 19, zipCode: "53189", phoneNumber: "2628992272", hobbies: ["cooking", "painting"], curiosities: ["love", "career"], pastActivities: null}
                })}
                />
            ),
            headerTitle: "",
            headerStyle: { backgroundColor: COLORS.primary},
          }}
          >
          <Tabs.Screen
        // Name of the route to hide.
            name="tabs/home"
            options={{
              // This tab will no longer show up in the tab bar.
              title: "Connect",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
        // Name of the route to hide.
            name="tabs/activities"
            options={{
              // This tab will no longer show up in the tab bar.
              title: "Activities",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cards-playing" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
        // Name of the route to hide.
        name="tabs/discussion"
        options={{
          // This tab will no longer show up in the tab bar.
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-outline" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          // Name of the route to hide.
          name="index"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="profile"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
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
        <Tabs.Screen
          // Name of the route to hide.
          name="voice/index"
          options={{
            // This tab will no longer show up in the tab bar.
          }}
        />
          </Tabs>
        </ThemeProvider>
      )
}

