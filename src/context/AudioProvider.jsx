import React, { Component, createContext } from "react";
export const AudioContext = createContext();

export default class AudioProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playbackObj: null,
      soundObj: null,
      currentAudio: {},
      isPlaying: false,
      playbackPosition: null,
      playbackDuration: null,
      // helpful questions state objects
      improveSleep: false,
      improveFocus: false,
      reduceStress: false,
      selfImprovement: false,
      calmAtWork: false,
      // recent feeling question
      latelyFeeling: "",
      biggestStress: "",
      stressSymtom: "",
      meditationExperience: "",
      meditationPace: "",
      stateOfMind: "",
      meditationTime: "",
    };
  }

  onPlaybackStatusUpdate = async (playbackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      this.updateState(this, {
        playbackPosition: playbackStatus.positionMillis,
        playbackDuration: playbackStatus.durationMillis,
      });
    }

    if (playbackStatus.didJustFinish) {
      return this.updateState(this, {
        playbackObj: null,
        soundObj: null,
        isPlaying: false,
        currentAudio: {},
        playbackPosition: null,
        playbackDuration: null,
      });
    }
  };

  updateState = (prevState, newState = {}) => {
    this.setState({ ...prevState, ...newState });
  };

  render() {
    const {
      playbackObj,
      soundObj,
      currentAudio,
      isPlaying,
      playbackPosition,
      playbackDuration,
      //
      improveSleep,
      improveFocus,
      reduceStress,
      selfImprovement,
      calmAtWork,
      //
      latelyFeeling,
      biggestStress,
      stressSymtom,
      meditationExperience,
      meditationPace,
      stateOfMind,
      meditationTime,
    } = this.state;
    return (
      <AudioContext.Provider
        value={{
          playbackObj,
          soundObj,
          currentAudio,
          isPlaying,
          playbackPosition,
          playbackDuration,
          //
          improveSleep,
          improveFocus,
          reduceStress,
          selfImprovement,
          calmAtWork,
          //
          latelyFeeling,
          biggestStress,
          stressSymtom,
          meditationExperience,
          meditationPace,
          stateOfMind,
          meditationTime,
          //
          updateState: this.updateState,
          onPlaybackStatusUpdate: this.onPlaybackStatusUpdate,
        }}
      >
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}
