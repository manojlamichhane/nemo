import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = props => {
  return (
    <Video
      resizeMode="contain"
      controls={true}
      source={{
        uri: props.source,
      }}
      style={styles.mediaPlayer}
      navigator={props.navigator}
    />
  );
};
const styles = StyleSheet.create({
  mediaPlayer: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    backgroundColor: 'black',
  },
});
export default VideoPlayer;
