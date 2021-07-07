import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {windowWidth} from '../constants';
import Typo from './Typo';

const EducationCard = props => {
  return (
    <View style={styles.articleCard}>
      <Image
        style={styles.cardImage}
        source={{
          uri: props.image,
        }}
      />
      <View style={{marginVertical: 10}}>
        <Typo size="18">Gliding on Insulin</Typo>
      </View>
      <Typo size="14">Figure skater and type 1 diabetes patient ...</Typo>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Typo size="12">Brittany Deohon</Typo>
        <Typo size="12">{props.length} second</Typo>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardImage: {
    resizeMode: 'contain',
    width: 221,
    height: 125,
    borderRadius: 20,
  },

  articleCard: {
    width: 221,
    height: 240,
    marginRight: 0.05 * windowWidth,
  },
});
export default EducationCard;
