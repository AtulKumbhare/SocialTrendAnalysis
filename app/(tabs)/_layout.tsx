import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme() || "light";

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint || "#ffa500",
        // tabBarActiveTintColor: "#ffa500",
        tabBarActiveTintColor: "#232b5d",
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 78 : 65,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
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
        name="notifications"
        options={{
          href: Platform.OS === 'web' ? null : "/notifications",
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
