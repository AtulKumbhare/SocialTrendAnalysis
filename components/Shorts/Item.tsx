import React, { useEffect, useRef, useState } from "react";
import YoutubePlayer, {
  YoutubeIframeRef,
} from "@dooboo/react-native-youtube-iframe";

import { LayoutRectangle, Platform } from "react-native";

export const getYoutubeIdFromURL = (url: string): string | undefined => {
  if (url.includes("?")) {
    const arr = url.split("?");
    arr.pop();

    url = arr[0];
  }

  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  const youtubeId = undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];

  if (youtubeId.includes("https://youtube.com/shorts/")) {
    return youtubeId.replace("https://youtube.com/shorts/", "");
  }

  return youtubeId;
};

type ShortItemProps = {
  index: number;
  visible: boolean;
  playing: boolean;
  paused: boolean;
  url: string;
  layout: LayoutRectangle;
};

function ShortItem({ visible, playing, url, layout }: ShortItemProps) {
  const youtubeId = getYoutubeIdFromURL(url);
  const youtubePlayerRef = useRef<YoutubeIframeRef>(null);

  const [webviewKey, setWebviewKey] = useState(1);

  useEffect(() => {
    if (Platform.OS === "ios") {
      setTimeout(() => setWebviewKey((key) => key + 1), 50);
    }
  }, []);

  return (
    <YoutubePlayer
      ref={youtubePlayerRef}
      height={layout.height}
      width={layout.width}
      videoId={youtubeId}
      play={playing}
      {...(Platform.OS === "ios" ? { key: webviewKey } : {})}
      onChangeState={(event) => {
        if (event === "ended" && visible) {
          youtubePlayerRef?.current?.seekTo(0, true);
        }
      }}
      webViewProps={{
        // javaScriptEnabled: Platform.OS === "ios" ? true : false,
        injectedJavaScript: `
          var element = document.getElementsByClassName('container')[0];
          element.style.position = 'unset';
          true;
        `,
      }}
    />
  );
}

export default ShortItem;
