import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
//
import PlayButton from "../../../components/PlayButton";

const AudioPlayer = () => {
  const [isAlreadyPlay, setisAlreadyPlay] = useState(false);
  const [duration, setDuration] = useState("00:00:00");
  const [timeElapsed, setTimeElapsed] = useState("00:00:00");
  const [percent, setPercent] = useState(0);
  const [current_track, setCurrentTrack] = useState(0);
  const [inprogress, setInprogress] = useState(false);
  const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

  const onStartPress = async (e) => {
    setisAlreadyPlay(true);
    setInprogress(true);
    const path = "file://" + dirs + "/" + playlist[current_track].path;
    audioRecorderPlayer.startPlayer(path);
    audioRecorderPlayer.setVolume(1.0);

    audioRecorderPlayer.addPlayBackListener(async (e) => {
      if (e.current_position === e.duration) {
        audioRecorderPlayer.stopPlayer();
      }
      let percent = Math.round(
        (Math.floor(e.current_position) / Math.floor(e.duration)) * 100
      );
      setTimeElapsed(e.current_position);
      setPercent(percent);
      setDuration(e.duration);
    });
  };

  const onPausePress = async (e) => {
    setisAlreadyPlay(false);
    audioRecorderPlayer.pausePlayer();
  };

  const onForward = async () => {
    let curr_track = playlist[current_track];
    let current_index = playlist.indexOf(curr_track) + 1;
    if (current_index === playlist.length) {
      setCurrentTrack(1);
    } else {
      setCurrentTrack((current_track) => current_track + 1);
    }
    onStopPress().then(async () => {
      await onStartPress();
    });
  };

  const onBackward = async () => {
    let curr_track = playlist[current_track];

    let current_index = playlist.indexOf(curr_track);

    if (current_index === 0) {
      setCurrentTrack(5);
    } else {
      setCurrentTrack((current_track) => current_track - 1);
    }
    onStopPress().then(async () => {
      await onStartPress();
    });
  };

  const changeTime = async (seconds) => {
    // 50 / duration
    let seektime = (seconds / 100) * duration;
    setTimeElapsed(seektime);
    audioRecorderPlayer.seekToPlayer(seektime);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.titleContainer}>
          <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
          <Text style={styles.text}>Coffee Player</Text>
        </View>
        <View style={styles.coverContainer}>
          {/* <Image
            source={{
              uri: playlist[current_track].cover,
            }}
            style={styles.cover}
          /> */}
          <Image
            source={require("../../../../assets/logo/coffee.jpeg")}
            style={styles.cover}
          />
        </View>

        <View style={styles.trackname}>
          <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>
            {/* {playlist[current_track].title} */}
            My Track Title
          </Text>
        </View>
      </View>

      <View>
        <Slider
          style={{ width: 330, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          value={percent}
          minimumTrackTintColor="#93A8B3"
          maximumTrackTintColor="#000000"
          onValueChange={(seconds) => changeTime(seconds)}
        />
      </View>
      <View style={styles.inprogress}>
        <Text style={[styles.textLight, styles.timeStamp]}>
          {!inprogress
            ? timeElapsed
            : audioRecorderPlayer.mmssss(Math.floor(timeElapsed))}
        </Text>
        <Text style={[styles.textLight, styles.timeStamp]}>
          {!inprogress
            ? duration
            : audioRecorderPlayer.mmssss(Math.floor(duration))}
        </Text>
      </View>
      <View style={styles.controlBtns}>
        <TouchableOpacity onPress={() => onBackward()}>
          <FontAwesome name="backward" size={32} color="#93A8B3" />
        </TouchableOpacity>
        <View>
          {!isAlreadyPlay ? (
            <PlayButton function={() => onStartPress()} state="play" />
          ) : (
            <PlayButton function={() => onPausePress()} state="pause" />
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
