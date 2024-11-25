import { useEffect, useState } from "react";
import { StyleSheet, Platform, Text, Dimensions, View } from "react-native";
import { LineChart as GiftedLineChart } from "react-native-gifted-charts";
import { LineChart } from "react-native-chart-kit";
import { Dropdown } from "react-native-element-dropdown";

import { DataTable, Divider, IconButton } from "react-native-paper";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "react-native-paper";
import Popover, { PopoverPlacement } from "react-native-popover-view";

import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { router } from "expo-router";
import { Image } from "expo-image";

import OracleImage from "@/assets/images/oracle.svg";
import CognizantImage from "@/assets/images/cognizant.svg";
import SymboticImage from "@/assets/images/symbotic.svg";
import TeslaImage from "@/assets/images/tesla.svg";
import AmazonImage from "@/assets/images/amazon.svg";
import TwitterImage from "@/assets/images/twitter.svg";
import facebookImage from "@/assets/images/facebook.svg";
import GoogleImage from "@/assets/images/google.svg";
import NetflixImage from "@/assets/images/netflix.svg";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Notifications from "./notifications";

const windowDim = Dimensions.get("window");
export const windowHeight = windowDim.height;
export const windowWidth = windowDim.width;
// export const primaryColor = "#232b5d";
export const primaryColor = "transparent";

const chartConfig = {
  backgroundColor: primaryColor,
  backgroundGradientFrom: primaryColor,
  // backgroundGradientTo: "#233b9d",
  backgroundGradientTo: "transparent",
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
    padding: 5,
    fontWeight: "bold",
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    // stroke: "#ffa726",
    stroke: "#233b9d",
  },
};

const d1 = [
  { value: 91000 / 1000, date: "31 Oct 2024" },
  { value: 85000 / 1000, date: "30 Sep 2024" },
  { value: 103000 / 1000, date: "31 Aug 2024" },
  { value: 99000 / 1000, date: "31 Jul 2024" },
  { value: 115000 / 1000, date: "30 Jun 2024" },
  { value: 122000 / 1000, date: "31 May 2024" },
  { value: 111000 / 1000, date: "30 Apr 2024" },
  { value: 135000 / 1000, date: "31 Mar 2024" },
  { value: 119000 / 1000, date: "29 Feb 2024" },
  { value: 121000 / 1000, date: "31 Jan 2024" },
];

const d2 = [
  { value: 93000 / 1000, date: "31 Dec 2023" },
  { value: 84490.9090909091 / 1000, date: "30 Nov 2023" },
  { value: 71000 / 1000, date: "31 Oct 2023" },
  { value: 76472.7272727273 / 1000, date: "30 Sep 2023" },
  { value: 72463.6363636364 / 1000, date: "31 Aug 2023" },
  { value: 68454.5454545455 / 1000, date: "31 Jul 2023" },
  { value: 55000 / 1000, date: "30 Jun 2023" },
  { value: 60436.3636363637 / 1000, date: "31 May 2023" },
  { value: 49000 / 1000, date: "30 Apr 2023" },
  { value: 52418.1818181818 / 1000, date: "31 Mar 2023" },
  { value: 48409.0909090909 / 1000, date: "28 Feb 2023" },
  { value: 44400 / 1000, date: "31 Jan 2023" },
];

export default function HomeScreen() {
  const [value, setValue] = useState<string>("2024");
  const [data, setData] = useState<{ value: number; date: string }[]>([...d1]);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const yearData = [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
  ];

  const lineData = [
    { value: 121000, label: "31 Oct 2024" },
    { value: 119000, label: "30 Sep 2024" },
    { value: 135000, label: "31 Aug 2024" },
    { value: 111000, label: "31 Jul 2024" },
    { value: 122000, label: "30 Jun 2024" },
    { value: 115000, label: "31 May 2024" },
    { value: 99000, label: "30 Apr 2024" },
    { value: 103000, label: "31 Mar 2024" },
    { value: 85000, label: "29 Feb 2024" },
    { value: 91000, label: "31 Jan 2024" },
    { value: 93000, label: "31 Dec 2023" },
    { value: 84490.9090909091, label: "30 Nov 2023" },
    { value: 71000, label: "31 Oct 2023" },
    { value: 76472.7272727273, label: "30 Sep 2023" },
    { value: 72463.6363636364, label: "31 Aug 2023" },
    { value: 68454.5454545455, label: "31 Jul 2023" },
    { value: 55000, label: "30 Jun 2023" },
    { value: 60436.3636363637, label: "31 May 2023" },
    { value: 49000, label: "30 Apr 2023" },
    { value: 52418.1818181818, label: "31 Mar 2023" },
    { value: 48409.0909090909, label: "28 Feb 2023" },
    { value: 44400, label: "31 Jan 2023" },
  ];

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setData(value == "2024" ? d1 : d2);
  }, [value]);

  const [recommendedStocks] = useState([
    {
      key: 1,
      name: "ORCL",
      price: 234,
      upDownPercentage: 0.98,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={OracleImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 2,
      name: "CTSH",
      price: 455,
      upDownPercentage: 0.78,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={CognizantImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 3,
      name: "SYMC",
      price: 232,
      upDownPercentage: 0.55,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={SymboticImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 4,
      name: "TSLA",
      price: 443,
      upDownPercentage: 0.66,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={TeslaImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
  ]);

  const [trendingStocks] = useState([
    {
      key: 1,
      name: "AMZN",
      price: 123,
      upDownPercentage: -0.23,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={AmazonImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 2,
      name: "TWTR",
      price: 322,
      upDownPercentage: 0.5,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={TwitterImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 3,
      name: "FB",
      price: 213,
      upDownPercentage: 1.1,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={facebookImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 4,
      name: "GOOG",
      price: 324,
      upDownPercentage: -0.6,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={GoogleImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
    {
      key: 5,
      name: "NFLX",
      price: 435,
      upDownPercentage: -0.13,
      logo: (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={NetflixImage}
            contentFit="cover"
            transition={400}
          />
        </View>
      ),
    },
  ]);

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      <View>
        {Platform.OS === "web" && (
          <View
            className="flex flex-row items-center"
            style={{ backgroundColor: Colors.light.tint }}
          >
            <Text className="flex-1 text-[18px] font-bold text-center py-4 text-white">
              Portfolio Summery
            </Text>
            <Popover
              placement={PopoverPlacement.LEFT}
              popoverStyle={{borderRadius: 14, width: 400}}
              from={
                <TouchableOpacity>
                  <Ionicons
                    className="mr-2"
                    name={"notifications-sharp"}
                    color={"#fff"}
                    size={24}
                  />
                </TouchableOpacity>
              }
            >
              <Notifications />
            </Popover>
          </View>
        )}
        <View>
          {/* <View className="p-4" style={styles.titleContainer}>
            <Card className="flex">
              <LinearGradient
                colors={["#232b5d", "#233b9d"]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }} // End at the right
                style={{ borderRadius: 12, paddingBottom: 20 }}
              >
                <View className="px-5 py-2" style={styles.titleContainer}>
                  <Text className="text-[18px] text-white font-bold text-center mt-2">
                    Portfolio Summery
                  </Text>
                </View>
                <View className="p-3 flex flex-row justify-center items-center">
                  <View style={styles.container}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={yearData}
                      search
                      labelField="label"
                      valueField="value"
                      placeholder={"Select Year"}
                      searchPlaceholder="Search"
                      value={value}
                      onChange={(item) => setValue(item.value)}
                    />
                  </View>
                </View>
                <Card.Content>
                  <GiftedLineChart
                    areaChart
                    curved
                    data={data}
                    height={250}
                    width={windowWidth - 110}
                    dataPointsHeight={10}
                    dataPointsWidth={10}
                    dataPointsRadius={5}
                    dataPointsColor="#ffffff"
                    color="#ffffff80"
                    thickness={2.5}
                    startFillColor="#fff"
                    endFillColor="#fff"
                    startOpacity={0.3}
                    endOpacity={0.1}
                    // rotateLabel
                    // initialSpacing={20}
                    // endSpacing={50}
                    noOfSections={5}
                    yAxisColor="transparent"
                    yAxisThickness={0}
                    yAxisLabelWidth={48}
                    yAxisLabelPrefix="₹"
                    yAxisLabelSuffix="K"
                    rulesType="dotted"
                    dashWidth={6}
                    rulesColor={"#ffffff33"}
                    showVerticalLines
                    verticalLinesStrokeDashArray={[6]}
                    verticalLinesColor={"#ffffff33"}
                    yAxisTextStyle={{
                      color: "#ffffffcc",
                      letterSpacing: 1,
                      fontSize: 12,
                    }}
                    yAxisSide={0}
                    xAxisColor="transparent"
                    isAnimated
                    adjustToWidth
                    focusEnabled
                    xAxisLabelTextStyle={{
                      color: "#ffffffcc",
                      marginLeft: -20,
                      fontSize: 10,
                    }}
                    xAxisLabelTexts={labels}
                    animateOnDataChange
                    onDataChangeAnimationDuration={300}
                    pointerConfig={{
                      pointerStripWidth: 0,
                      pointerColor: "#232b5d",
                      autoAdjustPointerLabelPosition: true,
                      pointerLabelComponent: (items: any) => {
                        return (
                          <View
                            style={{
                              width: 120,
                              justifyContent: "center",
                              marginLeft: -100,
                              backgroundColor: "#ffffff50",
                              borderRadius: 6,
                              paddingHorizontal: 14,
                              paddingVertical: 6,
                              zIndex: 10,
                            }}
                          >
                            <Text
                              style={{
                                color: "#fff",
                                fontSize: 14,
                                marginBottom: 6,
                                textAlign: "center",
                              }}
                            >
                              {items[0].date}
                            </Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                letterSpacing: 1,
                                color: "#fff",
                              }}
                            >
                              {"₹" +
                                parseFloat(items[0].value).toFixed(2) +
                                "K"}
                            </Text>
                          </View>
                        );
                      },
                    }}
                  />
                </Card.Content>
              </LinearGradient>
            </Card>
          </View> */}
          <View className="p-4" style={styles.titleContainer}>
            <Card>
              <LinearGradient
                colors={["#232b5d", "#233b9d"]}
                start={{ x: 0, y: 0 }} // Start from the left
                end={{ x: 1, y: 0 }} // End at the right
                style={{ borderRadius: 12, paddingBottom: 20 }}
              >
                {Platform.OS !== "web" && (
                  <View className="px-5 py-2" style={styles.titleContainer}>
                    <Text className="text-[18px] text-white font-bold text-center mt-2">
                      Portfolio Summery
                    </Text>
                  </View>
                )}
                <View
                  className={`${
                    Platform.OS === "web" ? "pt-5 p-3" : "p-3"
                  } flex flex-row justify-center items-center`}
                >
                  <View style={styles.container}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={yearData}
                      search
                      labelField="label"
                      valueField="value"
                      placeholder={"Select Year"}
                      searchPlaceholder="Search"
                      value={value}
                      onChange={(item) => setValue(item.value)}
                    />
                  </View>
                </View>
                <Card.Content
                  style={{
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    marginLeft: 0,
                  }}
                >
                  <LineChart
                    bezier
                    height={250}
                    width={windowWidth - 30}
                    chartConfig={chartConfig}
                    style={styles.chart}
                    yAxisLabel="₹"
                    yAxisSuffix="k"
                    // withVerticalLabels={false}
                    // withHorizontalLabels={false}
                    // horizontalLabelRotation={45}
                    // verticalLabelRotation={45}
                    yLabelsOffset={5}
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      datasets: [{ data: data?.map((item) => item.value) }],
                      // legend: [value],
                    }}
                  />
                </Card.Content>
              </LinearGradient>
            </Card>
          </View>
        </View>
        <View className={Platform.OS === "web" ? "grid md:grid-cols-2" : ""}>
          <View className="px-5 py-5">
            <Card>
              <Card.Content
                style={{ paddingHorizontal: 0, paddingVertical: 0 }}
              >
                <Text
                  className="text-[18px] font-bold text-center"
                  style={{ padding: 12 }}
                >
                  Recommended Stocks
                </Text>
                <Divider style={{ backgroundColor: "#e3e3e3" }} />
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title textStyle={{ letterSpacing: 1 }}>
                      Name
                    </DataTable.Title>
                    <DataTable.Title numeric textStyle={{ letterSpacing: 1 }}>
                      Price
                    </DataTable.Title>
                    <DataTable.Title numeric textStyle={{ letterSpacing: 1 }}>
                      G/L%
                    </DataTable.Title>
                  </DataTable.Header>
                  {recommendedStocks.map((item) => (
                    <DataTable.Row
                      key={item.key}
                      onPress={() => {
                        router.push(`/stats/${item.name}`);
                      }}
                    >
                      <DataTable.Cell
                        textStyle={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View className="flex flex-row items-center space-x-1">
                          {item.logo}
                          <Text>{item.name}</Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell
                        numeric
                        textStyle={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        {item.price}
                      </DataTable.Cell>
                      <DataTable.Cell
                        numeric
                        textStyle={{
                          color:
                            item.upDownPercentage > 0 ? "#389f05" : "#ff3535",
                          letterSpacing: 1,
                        }}
                      >
                        {item.upDownPercentage > 0 ? "+" : "-"}
                        {item.upDownPercentage}%
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </Card.Content>
            </Card>
          </View>
          <View className="px-5 py-5">
            <Card>
              <Card.Content
                style={{ paddingHorizontal: 0, paddingVertical: 0 }}
              >
                <Text
                  className="text-[18px] font-bold text-center"
                  style={{ padding: 12 }}
                >
                  Trending Stocks
                </Text>
                <Divider style={{ backgroundColor: "#e3e3e3" }} />
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title textStyle={{ letterSpacing: 1 }}>
                      Name
                    </DataTable.Title>
                    <DataTable.Title numeric textStyle={{ letterSpacing: 1 }}>
                      Price
                    </DataTable.Title>
                    <DataTable.Title numeric textStyle={{ letterSpacing: 1 }}>
                      G/L%
                    </DataTable.Title>
                  </DataTable.Header>
                  {trendingStocks.map((item) => (
                    <DataTable.Row
                      key={item.key}
                      onPress={() => {
                        router.push(`/stats/${item.name}`);
                      }}
                    >
                      <DataTable.Cell
                        textStyle={{ letterSpacing: 1, fontWeight: "bold" }}
                      >
                        <View className="flex flex-row items-center space-x-1">
                          {item.logo}
                          <Text>{item.name}</Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell
                        numeric
                        textStyle={{ letterSpacing: 1, fontWeight: "bold" }}
                      >
                        {item.price}
                      </DataTable.Cell>
                      <DataTable.Cell
                        numeric
                        textStyle={{
                          color:
                            item.upDownPercentage > 0 ? "#389f05" : "#ff3535",
                          letterSpacing: 1,
                        }}
                      >
                        {item.upDownPercentage > 0 ? "+" : ""}
                        {item.upDownPercentage}%
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
  },
  image: {
    flex: 1,
    width: "100%",
  },

  imageContainer: {
    width: 24,
    height: 24,
    marginRight: 6,
  },

  dropdown: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTextStyle: {
    fontSize: 16,
    color: "gray",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: "gray",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "gray",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    width: "92%",
    color: "gray",
  },
  titleContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    gap: 8,
  },
  chart: {
    // marginLeft: 15,
    borderRadius: 10,
  },
});
