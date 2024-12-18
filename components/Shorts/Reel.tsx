import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity,
  ImageURISource,
  TextInput,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import ActionBar from "./ActionBar";
import {
  GestureHandlerRootView,
  ScrollView,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Divider, List } from "react-native-paper";
// import AvatarComponent, { genConfig } from "@zamplyy/react-native-nice-avatar";
import commentsData from "@/data/comments";
import videos from "@/data/videos";
import { getDateString } from "@/utils/index";
import { Image } from "expo-image";
import uuid from "react-native-uuid";

const { height } = Dimensions.get("window");

type CommentType = {
  id: string;
  username: string;
  avatarUrl: string;
  text: string;
  timestamp: string | Date;
  isLiked: boolean;
  likes: number;
  replies: {
    id: string;
    username: string;
    avatarUrl: string;
    text: string;
    timestamp: string | Date;
    isLiked: boolean;
    likes: number;
    replies: CommentType[];
  }[];
};

const VideoReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const [comments, setComments] = useState<CommentType[]>([...commentsData]);
  const [commentText, setCommentText] = useState("");
  const [isReply, setIsReply] = useState(false);
  const [commentToReply, setCommentToReply] = useState({} as CommentType);
  const [replyToReply, setReplyToReply] = useState({} as CommentType);

  const handleViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80, // Trigger when 80% of the item is visible
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleClosePress = () => {
    bottomSheetRef?.current && bottomSheetRef.current.close();
  };
  const handleComments = () => {
    bottomSheetRef?.current && bottomSheetRef.current.expand();
  };

  const renderItem = ({ item, index }: any) => {
    // Move Player setup to a custom component to avoid breaking Rules of Hooks
    return (
      <VideoPlayerComponent
        key={item.id}
        url={item.url}
        isPlaying={index === currentIndex}
        handleClosePress={handleClosePress}
        handleComments={handleComments}
      />
    );
  };

  const handleCommentLike = (selectedComment: CommentType) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === selectedComment.id) {
        return {
          ...comment,
          isLiked: !comment.isLiked,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
        };
      }
      return comment; // Return unchanged comments
    });

    setComments(updatedComments); // Update the state with new comments
  };

  const handleReplyLike = (
    selectedComment: CommentType,
    selectedReply: CommentType
  ) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === selectedComment.id) {
        return {
          ...comment,
          replies: comment.replies.map((reply) => {
            if (reply.id === selectedReply.id) {
              return {
                ...reply,
                isLiked: !reply.isLiked,
                likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
              };
            }
            return reply; // Ensure we return the unchanged reply
          }),
        };
      }
      return comment; // Ensure we return the unchanged comment
    });

    setComments(updatedComments); // Update state with modified comments
  };

  // const handelReply = () => {
  //   let updatedCommentsWithReply: CommentType[] = [];
  //   [...comments].forEach((comment) => {
  //     if (comment.id === commentToReply.id) {
  //       comment.replies.push({
  //         id: uuid.v4().toString(),
  //         username: "AniK",
  //         text: commentText,
  //         timestamp: new Date(),
  //         avatarUrl: "https://i.pravatar.cc/150?img=17",
  //         isLiked: false,
  //         likes: 0,
  //         replies: [],
  //       });
  //     }
  //     updatedCommentsWithReply.push(comment);
  //   });
  //   setComments(updatedCommentsWithReply);
  //   setCommentText("");
  //   setIsReply(false);
  // };

  const handleReply = () => {
    // Create the new reply object
    const newReply = {
      id: uuid.v4().toString(),
      username: "AniK",
      text: commentText,
      timestamp: new Date(),
      avatarUrl: "https://i.pravatar.cc/150?img=17",
      isLiked: false,
      likes: 0,
      replies: [],
    };

    // Update the comments structure
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentToReply.id) {
        return {
          ...comment,
          replies: addReplyToNestedReplies(
            comment.replies,
            replyToReply.id,
            newReply
          ),
        };
      }
      return comment;
    });

    // Update state
    setComments(updatedComments);
    setCommentText(""); // Clear the input field
    setIsReply(false); // Reset reply state
  };

  // Helper function to add a reply to nested replies
  const addReplyToNestedReplies = (
    replies: CommentType[],
    targetId: string,
    newReply: CommentType
  ) => {
    return replies.map((reply): CommentType => {
      if (reply.id === targetId) {
        return {
          ...reply,
          replies: [...reply.replies, newReply], // Add the new reply to the target reply's replies
        };
      } else {
        return {
          ...reply,
          replies: addReplyToNestedReplies(reply.replies, targetId, newReply), // Recursively traverse nested replies
        };
      }
    });
  };

  const handelAddComment = () => {
    const newComment = {
      id: uuid.v4().toString(),
      username: "AtulK",
      text: commentText,
      timestamp: new Date(),
      avatarUrl: "https://i.pravatar.cc/150?img=7",
      isLiked: false,
      likes: 0,
      replies: [],
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        snapToInterval={height} // Snap each item to the full screen height
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={
          Platform.OS === "web" ? undefined : handleViewableItemsChanged
        }
        viewabilityConfig={viewabilityConfig}
        ref={flatListRef}
      />
      <BottomSheet
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
        snapPoints={[1, "25%", "50%", "75%"]}
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: "#272525" }}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
      >
        <Text
          className="text-white text-center font-[20px] font-bold"
          style={{ marginBottom: 10 }}
        >
          Comments
        </Text>
        <Divider style={{ height: 1, backgroundColor: "#3e3e3e" }} />
        <BottomSheetView style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, width: "100%" }}
          >
            {comments?.map((comment) => (
              <View key={comment.id}>
                <List.Item
                  title={
                    <View className="flex flex-row items-center">
                      <Text className="text-white">{comment.username}</Text>
                      <Text
                        className="text-white"
                        style={{ marginLeft: 16, fontSize: 10 }}
                      >
                        {getDateString(new Date(comment.timestamp))}
                      </Text>
                    </View>
                  }
                  description={
                    <View className="flex flex-col items-start">
                      <Text className="text-white">{comment.text}</Text>
                      <TouchableOpacity
                        className="mt-2"
                        onPress={() => {
                          setCommentToReply(comment);
                          setIsReply(true);
                          setCommentText(`@${comment.username} `);
                        }}
                      >
                        <Text style={styles.actionText}>Reply</Text>
                      </TouchableOpacity>
                    </View>
                  }
                  titleNumberOfLines={4}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    flex: 1,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  contentStyle={{
                    padding: 0,
                    marginLeft: 8,
                    justifyContent: "center",
                  }}
                  titleStyle={{ fontSize: 14, color: "white" }}
                  descriptionStyle={{
                    color: `#fff`,
                    fontSize: 13,
                    marginTop: 4,
                  }}
                  left={(props) => (
                    <Image
                      style={{ width: 36, height: 36, borderRadius: 18 }}
                      source={comment.avatarUrl as ImageURISource}
                    />
                  )}
                  right={(props) => (
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => handleCommentLike(comment)}
                    >
                      <Ionicons
                        name={comment.isLiked ? "heart-sharp" : "heart-outline"}
                        size={15}
                        color={comment.isLiked ? "red" : "white"}
                      />
                      <Text style={styles.actionText}>{comment.likes}</Text>
                    </TouchableOpacity>
                  )}
                />
                {comment.replies.length > 0 &&
                  comment.replies.map((reply) => (
                    <View
                      key={reply.id}
                      style={{
                        width: "100%",
                        paddingLeft: 30,
                        marginVertical: 0,
                      }}
                    >
                      <List.Item
                        title={
                          <View className="flex flex-row items-center">
                            <Text className="text-white">{reply.username}</Text>
                            <Text
                              className="text-white"
                              style={{ marginLeft: 16, fontSize: 10 }}
                            >
                              {getDateString(new Date(reply.timestamp))}
                            </Text>
                          </View>
                        }
                        description={
                          <View className="flex flex-col items-start">
                            <Text className="text-white">{reply.text}</Text>
                            <TouchableOpacity
                              className="mt-2"
                              onPress={() => {
                                setCommentToReply(comment);
                                setReplyToReply(reply);
                                setIsReply(true);
                                setCommentText(`@${comment.username} `);
                              }}
                            >
                              <Text style={styles.actionText}>Reply</Text>
                            </TouchableOpacity>
                          </View>
                        }
                        titleNumberOfLines={4}
                        style={{
                          paddingVertical: 0,
                          marginVertical: 0,
                          paddingHorizontal: 16,
                          flex: 1,
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        contentStyle={{
                          padding: 0,
                          marginLeft: 8,
                          marginVertical: 0,
                          justifyContent: "center",
                        }}
                        titleStyle={{ fontSize: 14, color: "white" }}
                        descriptionStyle={{
                          color: `#fff`,
                          fontSize: 13,
                          marginTop: 4,
                        }}
                        left={(props) => (
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 10,
                            }}
                            source={reply.avatarUrl as ImageURISource}
                          />
                        )}
                        right={(props) => (
                          <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => handleReplyLike(comment, reply)}
                          >
                            <Ionicons
                              name={
                                reply.isLiked ? "heart-sharp" : "heart-outline"
                              }
                              size={15}
                              color={reply.isLiked ? "red" : "white"}
                            />
                            <Text style={styles.actionText}>{reply.likes}</Text>
                          </TouchableOpacity>
                        )}
                      />
                      {reply.replies.length > 0 &&
                        reply.replies.map((replyOfReply) => (
                          <View
                            style={{
                              width: "100%",
                              flex: 1,
                              paddingLeft: 30,
                            }}
                          >
                            <List.Item
                              key={replyOfReply.id}
                              title={
                                <View className="flex flex-row items-center">
                                  <Text className="text-white">
                                    {replyOfReply.username}
                                  </Text>
                                  <Text
                                    className="text-white"
                                    style={{ marginLeft: 16, fontSize: 10 }}
                                  >
                                    {getDateString(
                                      new Date(replyOfReply.timestamp)
                                    )}
                                  </Text>
                                </View>
                              }
                              description={
                                <View className="flex flex-col items-start">
                                  <Text className="text-white">
                                    {replyOfReply.text}
                                  </Text>
                                </View>
                              }
                              titleNumberOfLines={4}
                              style={{
                                paddingVertical: 0,
                                marginVertical: 0,
                                paddingHorizontal: 16,
                                flex: 1,
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              contentStyle={{
                                padding: 0,
                                marginLeft: 8,
                                marginVertical: 0,
                                justifyContent: "center",
                              }}
                              titleStyle={{ fontSize: 14, color: "white" }}
                              descriptionStyle={{
                                color: `#fff`,
                                fontSize: 13,
                                marginTop: 4,
                              }}
                              left={(props) => (
                                <Image
                                  style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                  }}
                                  source={reply.avatarUrl as ImageURISource}
                                />
                              )}
                              // right={(props) => (
                              //   <TouchableOpacity
                              //     style={styles.actionButton}
                              //     onPress={() =>
                              //       handleReplyLike(comment, reply)
                              //     }
                              //   >
                              //     <Ionicons
                              //       name={
                              //         reply.isLiked
                              //           ? "heart-sharp"
                              //           : "heart-outline"
                              //       }
                              //       size={15}
                              //       color={reply.isLiked ? "red" : "white"}
                              //     />
                              //     <Text style={styles.actionText}>
                              //       {reply.likes}
                              //     </Text>
                              //   </TouchableOpacity>
                              // )}
                            />
                          </View>
                        ))}
                    </View>
                  ))}
              </View>
            ))}
          </ScrollView>
          <Divider style={{ height: 1, backgroundColor: "#3e3e3e" }} />
          <List.Item
            title={
              <View className="flex flex-row items-center">
                <Image
                  style={{ width: 36, height: 36, borderRadius: 18 }}
                  source="https://i.pravatar.cc/150?img=7"
                />
                <TextInput
                  // multiline
                  // textAlignVertical="center"
                  className="flex-1 p-3"
                  placeholder="Add a comment"
                  style={{ outline: "none", color: "white" }}
                  placeholderTextColor="white"
                  value={commentText}
                  onChangeText={setCommentText}
                />
              </View>
            }
            right={(props) => (
              <TouchableOpacity
                className="flex flex-row items-center"
                onPress={() => {
                  if (isReply) {
                    handleReply();
                  } else {
                    handelAddComment();
                  }
                }}
              >
                <Ionicons name="arrow-up-circle" size={30} color="white" />
              </TouchableOpacity>
            )}
            titleStyle={{ fontSize: 14, color: "white" }}
          />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const VideoPlayerComponent = ({
  url,
  isPlaying,
  handleClosePress,
  handleComments,
}: any) => {
  const [isVisible, setIsVisible] = useState(false); // Track if video is in view
  const videoRef = useRef(null); // For web-specific handling

  const [likes, setLikes] = useState(123);
  const [isLiked, setIsLiked] = useState(false);

  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const player = useVideoPlayer(url, (player) => {
    player.loop = true;
    player.play();
    player.volume = 1;
  });

  // Handle play/pause based on the `isPlaying` prop
  React.useEffect(() => {
    handleClosePress();
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
    if (isLiked) {
      setIsLiked(!isLiked);
      setLikes(likes - 1);
    } else {
      setIsLiked(!isLiked);
      setLikes(likes + 1);
    }
  };

  const handleComment = () => {
    handleComments();
  };

  const handleShare = () => {
    console.log("Share pressed!");
  };

  const handleMore = () => {
    console.log("More options!");
  };

  const handleTap = () => {
    handleClosePress();
    if (player.playing) {
      player.pause();
      setShowPlayIcon(true);
    } else {
      player.play();
      setShowPlayIcon(false);
    }
  };

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
            null
          )}
        </View>
      </TapGestureHandler>
      <ActionBar
        likes={likes}
        isLiked={isLiked}
        comments={30}
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
    height: Platform.OS === "android" ? height : height - 65,
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
  contentContainer: {
    flex: 1,
    // padding: 36,
    // alignItems: "flex-start",
    width: "100%",
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

export default VideoReels;
