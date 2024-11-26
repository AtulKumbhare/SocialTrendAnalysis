import { Colors } from "@/constants/Colors";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Platform, Text, View } from "react-native";
import { Divider, IconButton } from "react-native-paper";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Stats = () => {
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
          <LinearGradient
            colors={["#232b5d", "#233b9d"]}
            start={{ x: 0, y: 0 }} // Start from the left
            end={{ x: 1, y: 0 }} // End at the right
          >
            <View className="px-4 p-4 flex flex-row items-center">
              <Ionicons
                name={
                  Platform.OS == "web"
                    ? "arrow-back-circle-outline"
                    : Platform.OS === "android"
                    ? "arrow-back"
                    : "chevron-back"
                }
                size={30}
                color={"#fff"}
                onPress={() => navigation.goBack()}
              />
              <Text className="text-center flex-1 font-bold text-white text-[20px]">
                {id}
              </Text>
            </View>
          </LinearGradient>
        );
      },
    });
  }, [navigation]);

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <View className="px-5 py-2">
        <Text className="text-[20px] font-bold text-bold mb-3">Stats</Text>
        <View className="flex flex-row justify-between align-center gap-3">
          <View style={{ width: "45%" }}>
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">Open</Text>
              <Text className="font-bold uppercase text-right">24,549</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">High</Text>
              <Text className="font-bold uppercase text-right">24,567.45</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">Low</Text>
              <Text className="font-bold uppercase text-right">24,338</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">
                52Wk High
              </Text>
              <Text className="font-bold uppercase text-right">25,523</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">
                52Wk Low
              </Text>
              <Text className="font-bold uppercase text-right">19,879</Text>
            </View>
          </View>
          <View style={{ width: "45%" }}>
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">Open</Text>
              <Text className="font-bold uppercase text-right">24,549</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">High</Text>
              <Text className="font-bold uppercase text-right">24,567.45</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">Low</Text>
              <Text className="font-bold uppercase text-right">24,338</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">
                52Wk High
              </Text>
              <Text className="font-bold uppercase text-right">25,523</Text>
            </View>
            <Divider className="bg-gray-300" />
            <View className="py-2 flex flex-row justify-between align-center">
              <Text className="text-gray-400 font-bold uppercase">
                52Wk Low
              </Text>
              <Text className="font-bold uppercase text-right">19,879</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="text-[20px] font-bold mt-5 mb-3">Recent News</Text>
          <Divider className="bg-gray-300" />
          <List.Item
            title="Nifty closed above its 10-day EMA for the first time since the start of this downtrend, which is a sign of a bullish trend reversal. "
            description="Marketwatch . 9 hours ago"
            titleNumberOfLines={4}
            contentStyle={{ padding: 0 }}
            titleStyle={{ fontWeight: "bold" }}
            descriptionStyle={{ marginTop: 10, color: `#9ca3af`, fontSize: 12 }}
          />
          <Divider className="bg-gray-300" />
          <List.Item
            title="Next resistance for the Nifty is seen in the band of 24,650-24,700 which happens to be the major swing low registered in October."
            description="NCBC . Yesterday"
            titleNumberOfLines={4}
            contentStyle={{ padding: 0 }}
            titleStyle={{ fontWeight: "bold" }}
            descriptionStyle={{ marginTop: 10, color: `#9ca3af`, fontSize: 12 }}
          />
          <Divider className="bg-gray-300" />
          <List.Item
            title="Support for the Nifty now shifts up to 24,300."
            description="CNN . 2 hours ago"
            titleNumberOfLines={4}
            contentStyle={{ padding: 0 }}
            titleStyle={{ fontWeight: "bold" }}
            descriptionStyle={{ marginTop: 10, color: `#9ca3af`, fontSize: 12 }}
          />
        </View>
      </View>
    </Animated.ScrollView>
  );
};
export default Stats;
