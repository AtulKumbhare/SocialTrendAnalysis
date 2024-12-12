import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import ActionBar from "./ActionBar";
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height } = Dimensions.get("window");

const VideoReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleViewableItemsChanged = ({ viewableItems, changed }: any) => {
    console.log("Viewable items changed:", viewableItems[0]);
    console.log("changed:", changed);
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80, // Trigger when 80% of the item is visible
  };

  const renderItem = ({ item, index }: any) => {
    // Move Player setup to a custom component to avoid breaking Rules of Hooks
    return (
      <VideoPlayerComponent url={item.url} isPlaying={index === currentIndex} />
    );
  };

  const videoData = [
    {
      id: "001",
      url: require("../../assets/videos/1.mp4"),
      // url: 'http://192.168.120.124:8083/videos/video_1.mp4'
    },
    {
      id: "002",
      url: require("../../assets/videos/2.mp4"),
      // url: 'http://192.168.120.124:8083/videos/video_2.mp4'
    },
    {
      id: "003",
      url: require("../../assets/videos/3.mp4"),
      // url: 'http://192.168.120.124:8083/videos/video_3.mp4'
    },
    {
      id: "004",
      url: require("../../assets/videos/4.mp4"),
      // url: 'http://192.168.120.124:8083/videos/video_4.mp4'
    },
    {
      id: "005",
      url: require("../../assets/videos/5.mp4"),
      // url: 'http://192.168.120.124:8083/videos/video_5.mp4'
    },
    {
      id: "006",
      url: require("../../assets/videos/6.mp4"),
      // url: 'http://192.168.120.124:8083/videos/video_6.mp4'
    },
  ];

  return (
    <FlatList
      data={videoData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      pagingEnabled
      horizontal={false}
      showsVerticalScrollIndicator={false}
      snapToInterval={height} // Snap each item to the full screen height
      snapToAlignment="start"
      decelerationRate="fast"
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      ref={flatListRef}
    />
  );
};

const VideoPlayerComponent = ({ url, isPlaying }: any) => {
  // const [position, setPosition] = useState(0); // Current playback position in ms
  // const [duration, setDuration] = useState(0); // Total video duration in ms
  // const [isSeeking, setIsSeeking] = useState(false); // Whether the user is dragging the slider

  const [isVisible, setIsVisible] = useState(false); // Track if video is in view
  const videoRef = useRef(null); // For web-specific handling

  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const player = useVideoPlayer(url, (player) => {
    player.loop = true;
    player.play();
    player.volume = 1;
  });

  // Handle play/pause based on the `isPlaying` prop
  React.useEffect(() => {
    if (isPlaying || isVisible) {
      player.play();
      setShowPlayIcon(false);
    } else {
      player.pause();
      setShowPlayIcon(true);
    }
  }, [isPlaying, player, isVisible]);

  useEffect(() => {
    if (Platform.OS === "web" && videoRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the video is visible
      );
      observer.observe(videoRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const handleLike = () => {
    console.log("Liked!");
  };

  const handleComment = () => {
    console.log("Comment pressed!");
  };

  const handleShare = () => {
    console.log("Share pressed!");
  };

  const handleMore = () => {
    console.log("More options!");
  };

  const handleTap = () => {
    if (player.playing) {
      player.pause();
      setShowPlayIcon(true);
    } else {
      player.play();
      setShowPlayIcon(false);
    }
  };

  // const handleSeek = (value: number) => {
  //   setPosition(value);
  //   player.seekBy(value);
  // };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TapGestureHandler onEnded={handleTap}>
        <View
          style={styles.videoContainer}
          ref={Platform.OS === "web" ? videoRef : undefined}
        >
          <VideoView
            player={player}
            style={styles.video}
            nativeControls={Platform.OS === "web" ? true : false}
            allowsFullscreen={true}
            allowsPictureInPicture={true}
          />
          {showPlayIcon ? (
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Ionicons
                name="play-circle-outline"
                size={50}
                color="white"
                style={{ position: "absolute", left: "48%", top: "45%" }}
              />
            </View>
          ) : (
            ""
          )}
        </View>
      </TapGestureHandler>
      {/* {Platform.OS !== "web" && (
        <View style={styles.seekBarContainer}>
          <Slider
            style={styles.slider}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            step={1000} // Step in milliseconds (1 second)
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#888888"
            thumbTintColor="#FFFFFF"
            onSlidingStart={() => setIsSeeking(true)} // Pause updates while seeking
            onSlidingComplete={(value) => {
              setIsSeeking(false);
              handleSeek(value);
            }}
          />
        </View>
      )} */}

      <ActionBar
        likes={123}
        comments={45}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        onMore={handleMore}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoContainer: {
    height: Platform.OS === "web" ? height - 65 : height,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
    // height:  height,
  },
  seekBarContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly transparent background for better visibility
  },
  slider: {
    width: "100%",
    height: 60,
  },
});

export default VideoReels;
