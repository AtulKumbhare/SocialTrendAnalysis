import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import { Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  const colorScheme = useColorScheme() || "light";

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 78 : 65,
          paddingTop: 10,
          backgroundColor: "transparent",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarBackground() {
            return (
              <LinearGradient
                colors={["#232b5d", "#233b9d"]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }} // End at the right
                style={{
                  flex: 1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
            );
          },
          tabBarLabelPosition: "below-icon",
          tabBarLabel: ({ focused, color }) => (
            <ThemedText
              style={{
                color,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Home
            </ThemedText>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          animation: "shift",
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarBackground() {
            return (
              <LinearGradient
                colors={["#232b5d", "#233b9d"]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }} // End at the right
                style={{
                  flex: 1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
            );
          },
          tabBarLabelPosition: "below-icon",
          tabBarLabel: ({ focused, color }) => (
            <ThemedText
              style={{
                color,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Portfolio
            </ThemedText>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "pie-chart-sharp" : "pie-chart-outline"}
              color={color}
            />
          ),
          animation: "shift",
        }}
      />
      <Tabs.Screen
        name="shorts"
        options={{
          // href: Platform.OS === "web" ? null : "/shots",
          tabBarBackground() {
            return (
              <LinearGradient
                colors={["#232b5d", "#233b9d"]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }} // End at the right
                style={{
                  flex: 1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
            );
          },
          tabBarLabelPosition: "below-icon",
          tabBarLabel: ({ focused, color }) => (
            <ThemedText
              style={{
                color,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Shorts
            </ThemedText>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "videocam-sharp" : "videocam-outline"}
              color={color}
            />
          ),
          animation: "shift",
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: Platform.OS === "web" ? null : "/notifications",
          tabBarBackground() {
            return (
              <LinearGradient
                colors={["#232b5d", "#233b9d"]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }} // End at the right
                style={{
                  flex: 1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
            );
          },
          tabBarLabelPosition: "below-icon",
          tabBarLabel: ({ focused, color }) => (
            <ThemedText
              style={{
                color,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Notifications
            </ThemedText>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications-sharp" : "notifications-outline"}
              color={color}
            />
          ),
          animation: "shift",
        }}
      />
    </Tabs>
  );
}
