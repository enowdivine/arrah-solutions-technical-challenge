import React, { useContext, useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TextTicker from "react-native-text-ticker";
import { Audio } from "expo-av";
import { AudioContext } from "../../../context/AudioProvider";
import PlayButton from "../../../components/PlayButton";
import { convertTime } from "../../../helpers/timeConverter";
import { play, pause, resume } from "../../../helpers/audioController";

const AudioPlayer = ({ route }) => {
  const [loadedSound, setLoadedSound] = useState(null);
  const [duration, setDuration] = useState("00:00");
  const [currentPosition, setCurrentPosition] = useState(0);
  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration } = context;

  useEffect(() => {
    setLoadedSound(route.params.item);
  }, []);

  const calculateSeekBar = () => {
    if (playbackPosition !== null && playbackDuration !== null) {
      return playbackPosition / playbackDuration;
    }
    return 0;
  };

  const handlePlayPause = async () => {
    // play
    if (context.soundObj === null && loadedSound) {
      const playbackObj = new Audio.Sound();
      const uri = require("../../../../assets/music/track-one.mp3");
      const status = await play(playbackObj, uri);
      await context.updateState(context, {
        currentAudio: loadedSound,
        soundObj: status,
        playbackObj: playbackObj,
        isPlaying: true,
      });
      return playbackObj.setOnPlaybackStatusUpdate(
        context.onPlaybackStatusUpdate
      );
    }

    // pause audio
    if (context.soundObj.isLoaded && context.isPlaying) {
      const status = await pause(context.playbackObj);
      return context.updateState(context, {
        soundObj: status,
        isPlaying: false,
        playbackPosition: status.positionMillis,
      });
    }

    // resume audio
    if (context.soundObj.isLoaded && !context.isPlaying) {
      const status = await resume(context.playbackObj);
      return context.updateState(context, {
        soundObj: status,
        isPlaying: true,
      });
    }
  };

  const renderCurrentTime = () => {
    return convertTime(context.playbackPosition / 1000);
  };

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //         // context.updateState(context, {
  //         //   soundObj: null,
  //         //   playbackObj: null,
  //         //   isPlaying: false,
  //         // });
  //       }
  //     : undefined;
  // }, [sound]);

  const onForward = async () => {
    console.log("forward");
  };

  const onBackward = async () => {
    console.log("backward");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.titleContainer}>
          <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
          <Text style={styles.text}>Coffee Player</Text>
        </View>
        <View style={styles.coverContainer}>
          <Image
            source={loadedSound && loadedSound.coverImage}
            style={styles.cover}
          />
        </View>

        <View style={styles.trackname}>
          <TextTicker
            width={300}
            duration={30000}
            loop
            bounce={false}
            style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}
          >
            {loadedSound && loadedSound.title}
          </TextTicker>
        </View>
      </View>
      <View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          value={calculateSeekBar()}
          minimumTrackTintColor="#93A8B3"
          maximumTrackTintColor="#000000"
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
          style={{ width: 330, height: 40 }}
          onValueChange={(value) => {
            setCurrentPosition(
              convertTime((value * context.playbackDuration) / 1000)
            );
          }}
          onSlidingStart={async () => {
            if (!context.isPlaying) return;
            try {
              await pause(context.playbackObj);
            } catch (error) {
              console.error("error inside onSlideStart callback", error);
            }
          }}
          onSlidingComplete={async (value) => {
            if (context.soundObj === null || !context.isPlaying) return;
            try {
              const status = await context.playbackObj.setPositionAsync(
                Math.floor(context.playbackDuration * value)
              );
              context.updateState(context, {
                soundObj: status,
                playbackPosition: status.positionMillis,
              });
              await resume(context.playbackObj);
            } catch (error) {
              console.error("error inside onSlidingComplete callback", error);
            }
          }}
        />
      </View>
      <View style={styles.inprogress}>
        <Text style={[styles.textLight, styles.timeStamp]}>
          {context.playbackPosition === null ? duration : renderCurrentTime()}
        </Text>
        <Text style={[styles.textLight, styles.timeStamp]}>
          {context.playbackDuration === null
            ? duration
            : convertTime(context.playbackDuration / 1000)}
        </Text>
      </View>
      <View style={styles.controlBtns}>
        <TouchableOpacity onPress={() => onBackward()}>
          <FontAwesome name="backward" size={32} color="#93A8B3" />
        </TouchableOpacity>
        <View>
          {loadedSound ? (
            <PlayButton
              onPress={handlePlayPause}
              state={context.isPlaying ? "pause" : "play"}
            />
          ) : (
            <ActivityIndicator size={"large"} />
          )}
        </View>
        <TouchableOpacity onPress={() => onForward()}>
          <FontAwesome name="forward" size={32} color="#93A8B3" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loadSoundBtn: {
    marginTop: 20,
    backgroundColor: "purple",
  },
  loadBtnText: {
    color: "white",
    padding: 10,
  },
  textLight: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#ccc",
  },
  cover: {
    width: 230,
    height: 230,
    borderRadius: 150,
  },
  trackname: {
    marginTop: 20,
  },
  inprogress: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  controlBtns: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AudioPlayer;
