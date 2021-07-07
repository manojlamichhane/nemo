import React, {useState, useContext, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Typo from '../constants/Typo';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';
import axios from 'axios';
import {windowWidth} from '../constants';
import EducationCard from '../constants/EducationCard';

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
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Icon
          onPress={() => authcontext.toggleEducation()}
          style={{position: 'absolute', left: 0}}
          name="arrow-back"
          size={40}
          color="black"
        />
        <Typo size="30">Education</Typo>
      </View>

      <TextInput
        style={styles.textField}
        label="Search by category"
        mode="outlined"
        value={search}
        onChangeText={text => filterSearch(text)}
        right={
          <TextInput.Icon
            name={() => (
              <Icon name="search-outline" style={{marginTop: 10}} size={24} />
            )}
          />
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
                <EducationCard
                  image={item.thumbnailLink}
                  length={item.length}
                />
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
                <EducationCard
                  image={item.thumbnailLink}
                  length={item.length}
                />
              </TouchableOpacity>
            );
          }}
        />
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
  titleBar: {flexDirection: 'row', justifyContent: 'center'},
  categorybar: {
    backgroundColor: 'white',
    padding: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  textField: {
    marginVertical: 15,
    height: 50,
  },
});
export default EducationHome;
