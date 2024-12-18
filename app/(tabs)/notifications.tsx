import { Platform, Text, View } from "react-native";
import { Divider, IconButton, List, MD3Colors } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { format, differenceInDays, differenceInHours, parse } from "date-fns";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const getDateString = (dateString: string) => {
  const date = parse(dateString, "MM/dd/yy HH:mm:ss", new Date());
  const now = new Date();
  const diffInDays = differenceInDays(now, date);
  const diffInHours = differenceInHours(now, date);

  if (diffInDays === 0) {
    // Today
    if (diffInHours === 1) {
      return "1 hour ago";
    } else if (diffInHours === 0) {
      return "just now";
    } else {
      return `${diffInHours} hours ago`;
    }
  } else if (diffInDays === 1) {
    // Yesterday
    return `Yesterday at ${format(date, "h:mm a")}`;
  } else if (diffInDays < 10) {
    // Within 10 days
    return `${diffInDays} days ago at ${format(date, "h:mm a")}`;
  } else {
    // More than 10 days ago
    return format(date, "MMM d, yyyy") + " at " + format(date, "h:mm a");
  }
};
type notificationType = {
  id: number;
  msgType: "Info" | "Action" | "Alert";
  msg: string;
  date: string;
  isRead: boolean;
}[];

const notificationData: notificationType = [
  {
    id: 1,
    msgType: "Info",
    msg: "Congratulations! Your stocks net worth just passed $100K",
    date: "07/11/24 11:34:00",
    isRead: false,
  },
  {
    id: 2,
    msgType: "Action",
    msg: "Update your profile address now to continue trading",
    date: "07/11/24 09:30:00",
    isRead: true,
  },
  {
    id: 3,
    msgType: "Alert",
    msg: "You just sold 5 TWTR for $450 each",
    date: "06/11/24 15:45:00",
    isRead: true,
  },
  {
    id: 4,
    msgType: "Alert",
    msg: "You just bought 3 GOOG for $750 each",
    date: "03/11/24 13:30:00",
    isRead: true,
  },
  {
    id: 5,
    msgType: "Info",
    msg: "You can now start trading.",
    date: "01/11/24 10:15:00",
    isRead: true,
  },
];

const Notifications = () => {
  return (
    <View>
      <LinearGradient
        colors={
          Platform.OS !== "web" ? ["#232b5d", "#233b9d"] : ["#fff", "#fff"]
        }
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }} // End at the right
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View>
          <Text
            className={`p-4 text-[18px] ${
              Platform.OS !== "web" && "text-white"
            } font-bold text-center`}
          >
            Notifications
          </Text>
        </View>
      </LinearGradient>
      {Platform.OS === "web" && (
        <Divider style={{ backgroundColor: "#e3e3e3" }} />
      )}
      <View>
        {notificationData.map((item) => (
          <View key={item.id}>
            <View className="px-5 py-2">
              <List.Item
                title={item.msg}
                titleNumberOfLines={4}
                description={getDateString(item?.date)}
                style={{ padding: 0 }}
                contentStyle={{
                  padding: 0,
                  paddingRight: 0,
                  marginLeft: Platform.OS === "web" ? 8 : 0,
                  marginRight: Platform.OS === "web" ? 8 : 0,
                }}
                titleStyle={{
                  fontWeight: "bold",
                  padding: 0,
                }}
                descriptionStyle={{
                  color: `#9ca3af`,
                  fontSize: 12,
                  marginTop: 3,
                }}
                left={(props) => (
                  <View className="flex justify-center align-center">
                    <Ionicons
                      name={
                        item.msgType === "Action"
                          ? "calendar-outline"
                          : item.msgType === "Alert"
                          ? "alert-circle-outline"
                          : "information-circle-outline"
                      }
                      color={
                        item.msgType === "Action"
                          ? "#4ade80"
                          : item.msgType === "Alert"
                          ? "#f87171"
                          : "#60a5fa"
                      }
                      size={30}
                    />
                  </View>
                )}
                right={
                  item.isRead
                    ? () => <></>
                    : (props) => (
                        <View className="flex justify-center align-center">
                          <View
                            className="bg-blue-400"
                            style={{
                              width: 8,
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: Colors.light.tint,
                            }}
                          />
                        </View>
                      )
                }
              />
            </View>
            <Divider style={{ backgroundColor: "#e3e3e3" }} />
          </View>
        ))}
      </View>
    </View>
  );
};
export default Notifications;
