import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  // Image,
  Platform,
  View,
  Text,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";

import { ExternalLink } from "@/components/ExternalLink";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { PieChart } from "react-native-chart-kit";
import { useState } from "react";
import { PieChart as GiftedPieChart } from "react-native-gifted-charts";
import CustomPieChart from "@/components/PieChart";
import { Badge, Card, Divider, List } from "react-native-paper";
import { router } from "expo-router";

import OracleImage from "@/assets/images/oracle.svg";
import CognizantImage from "@/assets/images/cognizant.svg";
import SymboticImage from "@/assets/images/symbotic.svg";
import TeslaImage from "@/assets/images/tesla.svg";
import AmazonImage from "@/assets/images/amazon.svg";
import TwitterImage from "@/assets/images/twitter.svg";
import facebookImage from "@/assets/images/facebook.svg";
import GoogleImage from "@/assets/images/google.svg";
import NetflixImage from "@/assets/images/netflix.svg";
import ShoppersImage from "@/assets/images/shoppers.svg";

const windowDim = Dimensions.get("window");
export const windowHeight = windowDim.height;
export const windowWidth = windowDim.width;
export const primaryColor = "#FB8C00";
// export const primaryColor = "#009cfb";

// const chartConfig = {
//   backgroundColor: primaryColor,
//   backgroundGradientFrom: primaryColor,
//   backgroundGradientTo: "#FFA726",
//   // backgroundGradientTo: "#28a9f7",
//   decimalPlaces: 2,
//   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   style: {
//     borderRadius: 16,
//     padding: 5,
//     fontWeight: "bold",
//   },
//   propsForDots: {
//     r: "6",
//     strokeWidth: "2",
//     stroke: "#ffa726",
//   },
// };

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function TabTwoScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const data = [
    {
      name: "FB",
      price: 52.23,
      color: "orange",
      legendFontColor: "orange",
      legendFontSize: 15,
    },
    {
      name: "TWTR",
      price: 58.96,
      color: "green",
      legendFontColor: "green",
      legendFontSize: 15,
    },
    {
      name: "NFLX",
      price: 42.42,
      color: "olive",
      legendFontColor: "olive",
      legendFontSize: 15,
    },
    {
      name: "Shop",
      price: 44,
      color: "blue",
      legendFontColor: "blue",
      legendFontSize: 15,
    },
    {
      name: "GOOG",
      price: 44.67,
      color: "pink",
      legendFontColor: "pink",
      legendFontSize: 15,
    },
    {
      name: "AMZN",
      price: 11.95,
      color: "crimson",
      legendFontColor: "crimson",
      legendFontSize: 15,
    },
  ];

  const renderBadge = (value: number) => {
    return (
      <Badge
        style={{
          padding: 5,
          paddingLeft: 7,
          paddingRight: 7,
          height: "auto",
          minWidth: 46,
          borderRadius: 20,
          fontWeight: 600,
          backgroundColor: value < 0 ? "#fdb7bb" : "#bdf1d9",
          color: value < 0 ? "#df3535" : "#33b074",
          fontSize: 14,
          letterSpacing: 1,
        }}
      >
        {value + "%"}
      </Badge>
    );
  };

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <View>
        <View>
          <CustomPieChart />
        </View>
        <View className="p-3">
          <Card>
            <List.Item
              title="Stocks"
              titleStyle={{
                fontWeight: "bold",
                fontSize: 22,
                textAlign: "center",
              }}
            />
            <Divider style={{ backgroundColor: "#e3e3e3" }} />
            <Card.Content style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
              <List.Item
                title="Amazon"
                description="AMZN"
                titleNumberOfLines={4}
                style={{ paddingVertical: 10, paddingHorizontal: 16 }}
                contentStyle={{
                  padding: 0,
                  marginLeft: 8,
                }}
                titleStyle={{ fontWeight: "bold" }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                }}
                left={(props) => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={AmazonImage}
                  />
                )}
                right={(props) => renderBadge(-0.25)}
                onPress={() => {
                  router.push(`/stocks/AMZN`);
                }}
              />
              <Divider style={{ backgroundColor: "#e3e3e3" }} />
              <List.Item
                title="Shoppers"
                description="SHOP"
                titleNumberOfLines={4}
                style={{ paddingVertical: 10, paddingHorizontal: 16 }}
                contentStyle={{
                  padding: 0,
                  marginLeft: 8,
                }}
                titleStyle={{ fontWeight: "bold" }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                }}
                left={(props) => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={ShoppersImage}
                  />
                )}
                right={(props) => renderBadge(1)}
                onPress={() => {
                  router.push(`/stocks/SHOP`);
                }}
              />
              <Divider style={{ backgroundColor: "#e3e3e3" }} />
              <List.Item
                title="Google"
                description="GOOG"
                titleNumberOfLines={4}
                style={{ paddingVertical: 10, paddingHorizontal: 16 }}
                contentStyle={{
                  padding: 0,
                  marginLeft: 8,
                }}
                titleStyle={{ fontWeight: "bold" }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                }}
                left={(props) => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={GoogleImage}
                  />
                )}
                right={(props) => renderBadge(-0.75)}
                onPress={() => {
                  router.push(`/stocks/GOOG`);
                }}
              />
              <Divider style={{ backgroundColor: "#e3e3e3" }} />
              <List.Item
                title="Twitter"
                description="TWTR"
                titleNumberOfLines={4}
                style={{ paddingVertical: 10, paddingHorizontal: 16 }}
                contentStyle={{
                  padding: 0,
                  marginLeft: 8,
                }}
                titleStyle={{ fontWeight: "bold" }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                }}
                left={(props) => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={TwitterImage}
                  />
                )}
                right={(props) => renderBadge(1.45)}
                onPress={() => {
                  router.push(`/stocks/TWTR`);
                }}
              />
              <Divider style={{ backgroundColor: "#e3e3e3" }} />
              <List.Item
                title="Facebook"
                description="FB"
                titleNumberOfLines={4}
                style={{ paddingVertical: 10, paddingHorizontal: 16 }}
                contentStyle={{
                  padding: 0,
                  marginLeft: 8,
                }}
                titleStyle={{ fontWeight: "bold" }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                }}
                left={(props) => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={facebookImage}
                  />
                )}
                right={(props) => renderBadge(2.1)}
                onPress={() => {
                  router.push(`/stocks/FB`);
                }}
              />
              <Divider style={{ backgroundColor: "#e3e3e3" }} />
              <List.Item
                title="Netflix"
                description="NFLX"
                titleNumberOfLines={4}
                style={{ paddingVertical: 10, paddingHorizontal: 16 }}
                contentStyle={{
                  padding: 0,
                  marginLeft: 8,
                }}
                titleStyle={{ fontWeight: "bold" }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                }}
                left={(props) => (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={NetflixImage}
                  />
                )}
                right={(props) => renderBadge(1.2)}
                onPress={() => {
                  router.push(`/stocks/NFLX`);
                }}
              />
            </Card.Content>
          </Card>
        </View>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
