import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

type ActionBarProps = {
  likes: number;
  isLiked: boolean;
  comments: number;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onMore: () => void;
};
const { width } = Dimensions.get("window");

const ActionBar = ({
  likes = 0,
  isLiked = false,
  comments = 0,
  onLike,
  onComment,
  onShare,
  onMore,
}: ActionBarProps) => {
  return (
    <View style={styles.container}>
      {/* Like Button */}
      <TouchableOpacity style={styles.actionButton} onPress={onLike}>
        <Ionicons
          name={isLiked ? "heart-sharp" : "heart-outline"}
          size={26}
          color={isLiked ? "red" : "white"}
        />
        <Text style={styles.actionText}>{likes}</Text>
      </TouchableOpacity>

      {/* Comment Button */}
      <TouchableOpacity style={styles.actionButton} onPress={onComment}>
        <Ionicons name="chatbubble-outline" size={24} color="white" />
        <Text style={styles.actionText}>{comments}</Text>
      </TouchableOpacity>

      {/* Share Button */}
      <TouchableOpacity style={styles.actionButton} onPress={onShare}>
        <MaterialIcons name="share" size={24} color="white" />
        {/* <Feather name="send" size={24} color="white" /> */}
      </TouchableOpacity>

      {/* More Button */}
      <TouchableOpacity style={styles.actionButton} onPress={onMore}>
        <MaterialIcons name="more-vert" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: Platform.OS === "web" ? width / 3.2 : 10,
    bottom: Platform.OS === "ios" || Platform.OS === "android" ? 120 : 50,
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
    // zIndex: 2,
  },
  actionButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  actionText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});

export default ActionBar;
