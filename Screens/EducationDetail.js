import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Text, View, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Typo from '../constants/Typo';
import {Button} from 'react-native-paper';
import axios from 'axios';

const EducationDetail = props => {
  const [detail, setDetail] = useState({});
  useEffect(async () => {
    try {
      const resp = await axios.get(
        `https://api.docnemo.com:443/educational/${props.route.params.kind}/readAll`,
      );
      console.log(resp.data);
      const resp2 = await resp.data.find(
        item => item.id == props.route.params.id,
      );
      setDetail(resp2);
      console.log(detail);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View
      style={{
        marginTop: 42,
        paddingHorizontal: 20,
      }}>
      <Icon
        onPress={() => props.navigation.navigate('EducationHome')}
        style={{position: 'relative', left: 0}}
        name="arrow-back"
        size={40}
        color="black"
      />
      <View style={{marginVertical: 20}}>
        <Typo weight="bold" size="30">
          {detail && detail.title}
        </Typo>
      </View>
      <Typo size="12">MARCH 26,2020 | DIABETES, HEALTH</Typo>
      <View style={{marginVertical: 10}}>
        <Typo size="14">
          If left untreated, hypoglycemia can cause serious complications.
        </Typo>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 47, height: 47, marginRight: 10}}
            source={require('../assets/images/image_59.png')}
          />
          <Typo size="12">Brittany Doohan</Typo>
        </View>
        <Typo size="12">{detail && detail.video_length_second} second</Typo>
      </View>
      <Image
        style={{
          marginTop: 15,
          width: 336,
          height: 154,
          borderRadius: 20,
          marginBottom: 30,
        }}
        source={{uri: detail && detail.thumbnail_link}}
      />
      <Typo size="14">{detail && detail.description}</Typo>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          Linking.openURL(detail && detail.article_link);
        }}>
        Read More
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default EducationDetail;
