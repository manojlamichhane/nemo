import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Typo from './Typo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {windowHeight, windowWidth} from './index';

const DashBoardCard = props => {
  return (
    <View style={styles.adminCard}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Image style={{width: 22, height: 16}} source={props.image} />
          <Typo weight="normal" size="22">
            {props.title}
          </Typo>
          <Typo weight="normal" size="14">
            {props.subtitle}
          </Typo>
        </View>
        <Icon name="navigate-next" size={40} color="#c9c9d4" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adminCard: {
    padding: 0.05 * windowWidth,
    marginBottom: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 108,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 2,
  },
});
export default DashBoardCard;
