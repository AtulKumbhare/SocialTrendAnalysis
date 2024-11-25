import LineChart from "@/components/LineChart";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Platform, PlatformColor, View } from "react-native";
import { Badge, Card, Chip, Divider, List, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import AmazonImage from "@/assets/images/amazon.svg";
import TwitterImage from "@/assets/images/twitter.svg";
import facebookImage from "@/assets/images/facebook.svg";
import GoogleImage from "@/assets/images/google.svg";
import NetflixImage from "@/assets/images/netflix.svg";
import ShoppersImage from "@/assets/images/shoppers.svg";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

const Stocks = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  useEffect(() => {
    navigation.setOptions({
      title: id,
      headerTitleAlign: "center",
      headerTitleStyle: { color: "#fff", fontWeight: "bold" },
      header: (props: any) => {
        return (
          <View
            className="px-4 p-6 flex flex-row items-center"
            style={{ backgroundColor: Colors.light.tint }}
          >
            <Ionicons
              name={"arrow-back-circle-outline"}
              size={30}
              color={"#fff"}
              onPress={() => navigation.goBack()}
            />
            <View
              style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#fff", fontWeight: "bold" }}
                className="text-center font-bold text-white text-[20px]"
              >
                {id}
              </Text>
            </View>
          </View>
        );
      },
    });
  }, [navigation]);

  const renderBadge = (value: string | number) => {
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
          backgroundColor:
            typeof value === "number"
              ? value < 0
                ? "#fdb7bb"
                : "#bdf1d9"
              : "#ffffff50",
          color:
            typeof value === "number"
              ? value < 0
                ? "#df3535"
                : "#33b074"
              : "#fff",
          fontSize: 14,
          letterSpacing: 1,
          margin: 5,
        }}
      >
        {value}
      </Badge>
    );
  };

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <View className="p-4">
        <Card style={{ backgroundColor: "transparent" }}>
          <LinearGradient
            colors={["#232b5d", "#233b9d"]}
            start={{ x: 0, y: 0 }} // Start from the left
            end={{ x: 1, y: 0 }} // End at the right
            style={{ borderRadius: 12 }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#fff",
                letterSpacing: 1,
                textAlign: "center",
                paddingVertical: 14,
              }}
            >
              Stocks
            </Text>
            <Card.Content style={Platform.OS === "web" ? {} : { paddingRight: 0, paddingLeft: 25 }}>
              <LineChart />
            </Card.Content>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 14,
                paddingHorizontal: 14,
              }}
            >
              {renderBadge("1D")}
              {renderBadge("1W")}
              {renderBadge("1M")}
              {renderBadge("3M")}
              {renderBadge("1Y")}
              {renderBadge("ALL")}
            </View>
          </LinearGradient>
        </Card>
      </View>
      <View className="p-4">
        <Card>
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
            />
          </Card.Content>
        </Card>
      </View>
    </Animated.ScrollView>
  );
};
export default Stocks;
