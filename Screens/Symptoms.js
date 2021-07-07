import React, {useState, useContext, useEffect, useRef} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Typo from '../constants/Typo';
import Icon from 'react-native-vector-icons/Ionicons';
import HorizontalSeperator from '../constants/HorizontalSeperator';
import AuthContext from '../store/contexts/AuthContext';
import {windowHeight, windowWidth} from '../constants';
import axios from 'axios';

const Symptoms = props => {
  const authcontext = useContext(AuthContext);
  const [openCommonSearch, setOpenCommonSearch] = useState(false);
  const [openFilteredSymptoms, setOpenFilteredSymptoms] = useState(false);
  const [openSelectedSymptoms, setOpenSelectedSymptoms] = useState(false);
  const searchRef = useRef();
  const [active, setActive] = useState('');
  const [searches, setSearches] = useState([
    {id: 1, name: 'Mouth ulcers'},
    {id: 2, name: 'Apathy'},
    {id: 3, name: 'Sexual intercourse'},
    {id: 4, name: 'Appetite'},
  ]);
  const [search, setSearch] = useState('');
  const [symptomsList, setSymptomList] = useState([]);
  const [filteredSymptoms, setFilteredSymptoms] = useState({});
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const selectSymptom = value => {
    const resp = selectedSymptoms.find(
      item => item.symptomId == value.symptomId,
    );
    console.log(resp);
    if (resp == undefined) {
      const res = symptomsList.filter(
        item => item.symptomId == value.symptomId,
      );
      setSelectedSymptoms([...selectedSymptoms].concat(res));
      setOpenFilteredSymptoms(false);
      setOpenSelectedSymptoms(true);
      setSearch('');
    } else {
      setOpenFilteredSymptoms(false);
      setOpenSelectedSymptoms(true);
    }
  };
  const filter = text => {
    setSearch(text);
    setOpenCommonSearch(false);
    filterSymptom(text);
  };
  const filterSymptom = text => {
    if (text == '') {
      setFilteredSymptoms({});
    } else {
      const resp = symptomsList.filter(item =>
        item.symptomName.toLowerCase().includes(text.toLowerCase()),
      );
      setOpenCommonSearch(false);
      setFilteredSymptoms(resp);
      setOpenFilteredSymptoms(true);
      setActive(text);
    }
  };
  useEffect(async () => {
    try {
      searchRef.current.focus();
      const resp = await axios.get(
        'http://devnemoapi-env.eba-7amnmr7d.us-east-2.elasticbeanstalk.com:80/ref-infermedica-symptoms',
      );
      setSymptomList(resp.data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const removeSymptom = value => {
    const resp = selectedSymptoms.filter(item => item.symptomId != value);
    setSelectedSymptoms(resp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Icon
          style={{position: 'absolute', left: 0}}
          onPress={() => authcontext.toggleSymptom()}
          name="arrow-back"
          size={40}
          color="black"
        />
        <Typo size="26">Symptom Check</Typo>
      </View>
      <TextInput
        onFocus={() => setOpenCommonSearch(true)}
        onBlur={() => setOpenCommonSearch(false)}
        ref={searchRef}
        style={{width: '100%', height: 50}}
        label="Search for Symptoms"
        mode="outlined"
        value={search}
        onChangeText={text => filter(text)}
        right={
          <TextInput.Icon
            name={() => (
              <Icon
                name={search.length < 1 ? 'ios-search-sharp' : 'close'}
                style={{marginTop: 5}}
                size={30}
                color="black"
              />
            )}
          />
        }
      />
      {openCommonSearch ? (
        <View
          style={{
            marginTop: 10,
          }}>
          <Typo size="18" color="#6294AF">
            Common searches
          </Typo>
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {searches.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => filterSymptom(item.name)}>
                  <View
                    style={{
                      ...styles.commonSeacrh,
                      backgroundColor:
                        active == item.name ? '#42deb4' : 'white',
                    }}>
                    <Typo size="18">{item.name}</Typo>
                    {active == item.name ? (
                      <Icon
                        style={{marginHorizontal: 5}}
                        onPress={() => (
                          (filteredSymptoms.length = 0), setActive('')
                        )}
                        name="remove-circle-outline"
                        size={20}
                        color="black"
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {openFilteredSymptoms ? (
        <View
          style={{
            marginTop: 10,
            height: 0.9 * windowHeight,
          }}>
          <View
            style={{
              marginVertical: 5,
            }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredSymptoms}
              keyExtractor={item => item.symptomId}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      selectSymptom(item);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <View style={{width: '90%'}}>
                        <Typo size="18">{item.symptomName}</Typo>
                        <Typo size="14">{item.commonName}</Typo>
                      </View>
                      <Icon
                        name="md-arrow-forward-circle"
                        size={40}
                        color="#42deb4"
                      />
                    </View>
                    <HorizontalSeperator />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      ) : null}
      {openSelectedSymptoms ? (
        <View>
          <View
            style={{
              marginTop: 10,
              height: 0.6 * windowHeight,
            }}>
            <Typo size="20" color="#6294AF">
              My Symptoms
            </Typo>
            <View
              style={{
                marginVertical: 5,
              }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={selectedSymptoms}
                keyExtractor={item => item.symptomId}
                renderItem={({item}) => {
                  return (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 5,
                        }}>
                        <View style={{width: '70%'}}>
                          <Typo size="18">{item.symptomName}</Typo>
                          <Typo size="14">{item.commonName}</Typo>
                        </View>
                        <TouchableOpacity
                          onPress={() => removeSymptom(item.symptomId)}>
                          <Typo size="18" color="red">
                            Remove
                          </Typo>
                        </TouchableOpacity>
                      </View>
                      <HorizontalSeperator />
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => searchRef.current.focus()}>
            Add another symptom
          </Button>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() =>
              props.navigation.navigate('Consult', {value: selectedSymptoms})
            }>
            Next
          </Button>
        </View>
      ) : null}
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
    marginVertical: 5,
    backgroundColor: '#42deb4',
    width: '100%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonSeacrh: {
    height: 40,
    margin: 5,
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
});
export default Symptoms;
