import { Dimensions, Text, View } from "react-native";
import { LineChart as GiftedLineChart } from "react-native-gifted-charts";

const windowDim = Dimensions.get("window");
export const windowHeight = windowDim.height;
export const windowWidth = windowDim.width;

const LineChart = () => {
  const ptData = [
    { value: 119000 / 1000, date: "6 Nov 2024" },
    { value: 135000 / 1000, date: "5 Nov 2024" },
    { value: 121000 / 1000, date: "7 Nov 2024" },
    { value: 111000 / 1000, date: "4 Nov 2024" },
    { value: 122000 / 1000, date: "3 Nov 2024" },
    { value: 115000 / 1000, date: "2 Nov 2024" },
    { value: 99000 / 1000, date: "1 Nov 2024" },
    { value: 103000 / 1000, date: "31 Oct 2024" },
    { value: 85000 / 1000, date: "30 Oct 2024" },
    { value: 91000 / 1000, date: "29 Oct 2024" },
    { value: 93000 / 1000, date: "28 Oct 2024" },
  ];

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <GiftedLineChart
        areaChart
        curved
        data={ptData}
        height={250}
        width={windowWidth - 120}
        // hideDataPoints
        dataPointsHeight={10}
        dataPointsWidth={10}
        dataPointsRadius={5}
        // dataPointsColor="#232b5d"
        // color="#232b5d"
        // dataPointsColor="#ffffff80"
        dataPointsColor="#ffffff"
        color="#ffffff80"
        thickness={2.5}
        // startFillColor="#232bad"
        // endFillColor="#233ddd"
        startFillColor="#fff"
        endFillColor="#fff"
        startOpacity={0.3}
        endOpacity={0.1}
        initialSpacing={0}
        endSpacing={0}
        noOfSections={6}
        yAxisColor="transparent"
        yAxisThickness={0}
        yAxisLabelWidth={50}
        yAxisLabelSuffix="K"
        rulesType="dotted"
        dashWidth={6}
        rulesColor={"#ffffff33"}
        showVerticalLines
        verticalLinesStrokeDashArray={[6]}
        verticalLinesColor={"#ffffff33"}
        yAxisTextStyle={{ color: "#ffffffcc", letterSpacing: 1 }}
        yAxisSide={1}
        xAxisColor="transparent"
        isAnimated
        adjustToWidth
        focusEnabled
        // rotateLabel
        // width={600}
        // spacing={10}
        // maxValue={600}
        // xAxisLabelTextStyle={{ color: "gray" }}
        // xAxisLabelsVerticalShift={40}
        // labelsExtraHeight={20}
        pointerConfig={{
          pointerStripWidth: 0,
          pointerColor: "#232b5d",
          // radius: 6,
          // activatePointersOnLongPress: true,
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
                  {"₹" + items[0].value + "K"}
                </Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};
export default LineChart;
