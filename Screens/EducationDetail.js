import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Image, Text, View, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Typo from '../constants/Typo';
import {Button} from 'react-native-paper';
import axios from 'axios';
import {windowWidth} from '../constants';
import VideoPlayer from '../constants/VideoPlayer';

const EducationDetail = props => {
  const [detail, setDetail] = useState({});

  useEffect(async () => {
    try {
      const resp1 = await axios.get(
        `https://api.docnemo.com:443/videos?type=${props.route.params.kind}&category=${props.route.params.category}`,
      );
      const resp2 = await resp1.data.data.find(
        item => item.id === props.route.params.id,
      );
      setDetail(resp2);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Icon
        onPress={() => props.navigation.navigate('EducationHome')}
        style={{position: 'relative', left: 0}}
        name="arrow-back"
        size={40}
        color="black"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typo size="30">{detail && detail.title}</Typo>
        <Typo size="12">
          MARCH 26,2020 | {detail && detail.category}, HEALTH
        </Typo>
        <View style={{marginVertical: 10}}>
          <Typo size="14">{detail && detail.description}</Typo>
        </View>
        <View style={styles.authorBar}>
          <View style={styles.authorBar}>
            <Image
              style={styles.authorImage}
              source={require('../assets/images/image_59.png')}
            />
            <Typo size="12">Brittany Doohan</Typo>
          </View>
          <Typo size="12">{detail && detail.length} second</Typo>
        </View>
        <View style={{marginVertical: 10}}>
          <VideoPlayer source={detail && detail.mediaFileLink} />
        </View>
        <Typo size="14">{detail && detail.description}</Typo>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            Linking.openURL(detail && detail.articleLink);
          }}>
          Read More
        </Button>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0.055 * windowWidth,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorImage: {
    resizeMode: 'contain',
    width: 47,
    height: 47,
    marginRight: 10,
  },
  authorBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default EducationDetail;
