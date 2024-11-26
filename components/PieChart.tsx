import { LinearGradient } from "expo-linear-gradient";
import { Platform, Text, View } from "react-native";
import { PieChart as GiftedPieChart } from "react-native-gifted-charts";

const PieChart = () => {
  const pieData = [
    {
      name: "FB",
      value: 52.23,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
    },
    {
      name: "TWTR",
      value: 58.96,
      color: "#93FCF8",
      gradientCenterColor: "#3BE9DE",
    },
    {
      name: "NFLX",
      value: 42.42,
      color: "#BDB2FA",
      gradientCenterColor: "#8F80F3",
    },
    {
      name: "Shop",
      value: 44,
      color: "#FFA5BA",
      gradientCenterColor: "#FF7F97",
    },
    {
      name: "GOOG",
      value: 44.67,
      color: "#F6F7C4",
      gradientCenterColor: "#F6F7C4",
    },
    {
      name: "AMZN",
      value: 11.95,
      color: "#A1EEBD",
      gradientCenterColor: "#A1EEBD",
    },
  ];

  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
            flexWrap: "wrap",
          }}
        >
          {pieData?.map((item) => (
            <View
              key={item.name}
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 120,
                marginRight: 20,
                marginBottom: 20,
              }}
            >
              {renderDot(item?.color)}
              <Text style={{ color: "white" }}>
                {item.name}: {((item.value * 100) / 360).toFixed(2)}%
              </Text>
            </View>
          ))}
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={["#232b5d", "#233b9d"]}
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }} // End at the right
        style={{
          borderRadius: Platform.OS == "web" ? 0 : 20,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Portfolio
          </Text>
          <View style={{ padding: 20, alignItems: "center" }}>
            <GiftedPieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
              radius={100}
              innerRadius={50}
              innerCircleColor={"#232B5D"}
              isAnimated={true}
              showTooltip
              // centerLabelComponent={() => {
              //   return (
              //     <View
              //       style={{ justifyContent: "center", alignItems: "center" }}
              //     >
              //       <Text
              //         style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
              //       >
              //         47%
              //       </Text>
              //       <Text style={{ fontSize: 14, color: "white" }}>
              //         Excellent
              //       </Text>
              //     </View>
              //   );
              // }}
            />
          </View>
          {renderLegendComponent()}
        </View>
      </LinearGradient>
    </View>
  );
};
export default PieChart;
