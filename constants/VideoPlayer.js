import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = props => {
  console.log('mediasource', props.source);
  return (
    <Video
      resizeMode="contain"
      controls={true}
      source={{
        uri: props.source,
      }}
      style={styles.mediaPlayer}
    />
  );
};
const styles = StyleSheet.create({
  mediaPlayer: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    backgroundColor: 'black',
  },
});
export default VideoPlayer;
