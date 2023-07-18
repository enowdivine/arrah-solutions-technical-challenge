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
          updateState: this.updateState,
          onPlaybackStatusUpdate: this.onPlaybackStatusUpdate,
        }}
      >
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}
