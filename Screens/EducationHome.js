import React, {useState, useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Typo from '../constants/Typo';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';
import axios from 'axios';

const EducationHome = props => {
  const authcontext = useContext(AuthContext);
  const [categories, setCategories] = useState({});
  const [keepViewing, setKeepViewing] = useState({});
  const [recommendation, setRecommendation] = useState({});

  useEffect(async () => {
    try {
      const resp = await axios.get(
        'https://api.docnemo.com:443/educational/contents/readAll',
      );
      setCategories(resp.data);
      const resp2 = await axios.get(
        'https://api.docnemo.com:443/educational/keepViewing/readAll',
      );
      setKeepViewing(resp2.data);
      const resp3 = await axios.get(
        'https://api.docnemo.com:443/educational/reccommended/readAll',
      );
      setRecommendation(resp3.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <View style={{marginTop: 42, paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icon
          onPress={() => authcontext.toggleEducation()}
          style={{position: 'absolute', left: 0}}
          name="arrow-back"
          size={40}
          color="black"
        />
        <Typo weight="bold" size="30">
          Education
        </Typo>
      </View>
      <TextInput
        style={{marginVertical: 20}}
        label="Search"
        mode="outlined"
        value={null}
        onChangeText={null}
        right={
          <TextInput.Icon
            name={() => <Icon name="search-outline" size={24} />}
          />
        }
      />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View key={item.id} style={styles.categorybar}>
              <Typo size="14">{item.name}</Typo>
            </View>
          );
        }}
      />
      <ScrollView>
        <View style={{marginVertical: 25}}>
          <Typo size="12" color="#6294AF">
            KEEP VIEWING
          </Typo>
        </View>
        <FlatList
          horizontal
          data={keepViewing}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('EducationDetail', {
                    id: item.id,
                    kind: 'keepViewing',
                  })
                }>
                <View style={{width: 221, height: 220, marginRight: 20}}>
                  <Image
                    style={{
                      width: 221,
                      height: 108,
                      borderRadius: 20,
                    }}
                    source={{
                      uri: item.thumbnail_link,
                    }}
                  />
                  <View style={{marginVertical: 10}}>
                    <Typo size="18">Gliding on Insulin</Typo>
                  </View>
                  <Typo size="14">
                    Figure skater and type 1 diabetes patient ...
                  </Typo>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Typo size="12">Brittany Deohon</Typo>
                    <Typo size="12">{item.video_length_second} second</Typo>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{marginVertical: 25}}>
          <Typo size="12" color="#6294AF">
            RECOMMENDATION
          </Typo>
        </View>
        <FlatList
          horizontal
          data={recommendation}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('EducationDetail', {
                    id: item.id,
                    kind: 'reccommended',
                  })
                }>
                <View style={{width: 221, height: 220, marginRight: 20}}>
                  <Image
                    style={{
                      width: 221,
                      height: 108,
                      borderRadius: 20,
                    }}
                    source={{
                      uri: item.thumbnail_link,
                    }}
                  />
                  <View style={{marginVertical: 10}}>
                    <Typo size="18">Gliding on Insulin</Typo>
                  </View>
                  <Typo size="14">
                    Figure skater and type 1 diabetes patient ...
                  </Typo>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Typo size="12">Brittany Deohon</Typo>
                    <Typo size="12">150 second</Typo>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categorybar: {
    backgroundColor: 'white',
    width: 140,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
  },
});
export default EducationHome;
