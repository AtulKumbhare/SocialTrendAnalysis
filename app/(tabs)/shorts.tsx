import { useEvent } from "expo";
// import { useVideoPlayer, VideoView } from "expo-video";
import { useCallback, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";
// import Video, { VideoRef } from "react-native-video";
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";
import Shorts from "@/components/Shorts";
const Shots = () => {

  const items = [
    {
      id: "001",
      url: "https://youtube.com/shorts/WJaUk753Wdw",
    },
    {
      id: "002",
      url: "https://youtube.com/shorts/oULcvibPNK4",
    },
    {
      id: "003",
      url: "https://youtube.com/shorts/YT5uq5Y9oHs",
    },
    {
      id: "004",
      url: "https://youtube.com/shorts/qQHcdeOfeCk",
    },
    {
      id: "005",
      url: "https://youtube.com/shorts/6XdoLLO3GuA",
    },
    {
      id: "006",
      url: "https://youtube.com/shorts/cmYVlEaylx0",
    },
  ];
  return (
    <View style={{ flex: 1, alignSelf: 'stretch'}}>
      <Shorts items={items} />
    </View>
  );
};

export default Shots;
