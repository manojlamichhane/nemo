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
import {windowWidth} from '../constants';

const EducationHome = props => {
  const authcontext = useContext(AuthContext);
  const [categories, setCategories] = useState({});
  const [keepViewing, setKeepViewing] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [search, setSearch] = useState('');
  const [searchedCategory, setSearchedCategory] = useState({});
  const [searchResult, setSearchResult] = useState('');

  useEffect(async () => {
    try {
      const resp = await axios.get(
        `https://api.docnemo.com:443/videos${searchResult}`,
      );
      setCategories(resp.data.meta.categories);
      setKeepViewing(resp.data.data.popular);
      setRecommendation(resp.data.data.recommended);
    } catch (e) {
      console.log(e);
    }
  }, [searchResult]);
  const filterSearch = text => {
    setSearch(text);
    const srr = categories.filter(category => category.name.includes(text));
    setSearchedCategory(srr);
  };
  return (
    <View
      style={{flex: 1, marginTop: 42, paddingHorizontal: 0.05 * windowWidth}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Icon
          onPress={() => authcontext.toggleEducation()}
          style={{position: 'absolute', left: 0}}
          name="arrow-back"
          size={40}
          color="black"
        />
        <Typo weight="normal" size="30">
          Education
        </Typo>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          style={{marginVertical: 20, fontSize: 16}}
          label="Search by category"
          mode="outlined"
          value={search}
          onChangeText={text => filterSearch(text)}
          right={
            <TextInput.Icon
              name={() => <Icon name="search-outline" size={24} />}
            />
          }
        />
        <View style={{marginBottom: 20}}>
          <Typo size="12" color="#6294AF">
            CATEGORIES
          </Typo>
        </View>
        <FlatList
          horizontal
          data={
            Object.keys(searchedCategory).length === 0
              ? categories
              : searchedCategory
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  setSearchResult(`?category=${item.name.replace(/ /g, '%20')}`)
                }>
                <View key={item.id} style={styles.categorybar}>
                  <Typo size="14">{item.name}</Typo>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <View style={{marginVertical: 0.05 * windowWidth}}>
          <Typo size="12" color="#6294AF">
            KEEP VIEWING
          </Typo>
        </View>
        <FlatList
          ListEmptyComponent={
            <Typo size="12">No items match your search. Try Again</Typo>
          }
          horizontal
          data={keepViewing}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('EducationDetail', {
                    id: item.id,
                    kind: 'popular',
                    category: item.category,
                  })
                }>
                <View
                  style={{
                    width: 221,
                    height: 240,
                    marginRight: 0.05 * windowWidth,
                  }}>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: item.thumbnailLink,
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
                    <Typo size="12">{item.length} second</Typo>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{marginVertical: 0.05 * windowWidth}}>
          <Typo size="12" color="#6294AF">
            RECOMMENDATION
          </Typo>
        </View>
        <FlatList
          horizontal
          ListEmptyComponent={
            <Typo size="12">No items match your search. Try Again</Typo>
          }
          data={recommendation}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('EducationDetail', {
                    id: item.id,
                    kind: 'recommended',
                    category: item.category,
                  })
                }>
                <View
                  style={{
                    width: 221,
                    height: 230,
                    marginRight: 20,
                    marginBottom: 20,
                  }}>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: item.thumbnailLink,
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
                    <Typo size="12">{item.length} second</Typo>
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
    borderRadius: 20,
  },
  cardImage: {
    resizeMode: 'contain',
    width: 221,
    height: 125,
    borderRadius: 20,
  },
});
export default EducationHome;
