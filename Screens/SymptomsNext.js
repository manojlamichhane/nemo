import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Typo from '../constants/Typo';
import {windowWidth} from '../constants';

const SymptomsNext = props => {
  const [start, setStart] = useState(false);
  const [response, setResponse] = useState('');
  const [offSet, setOffSet] = useState(1);
  const [sources, setSources] = useState({});
  const [symptoms, setSymptoms] = useState([]);
  const [questions, setQuestions] = useState([
    {
      id: '1',
      title: 'Do you have any of the following symptoms?',
      data: [
        {id: 1, option: 'Stuffed nose'},
        {id: 2, option: 'Mucus dripping at the back of the throat'},
        {id: 3, option: 'Hawking'},
        {id: 4, option: 'Difficulty smelling'},
        {id: 5, option: 'Facial pain'},
        {id: 6, option: 'Fatigue'},
      ],
    },
    {
      id: '2',
      title: 'Is your nose stuffed or congested',
      data: [
        {id: 1, option: 'Yes'},
        {id: 2, option: 'No'},
        {id: 3, option: 'Dont Know'},
      ],
    },
    {
      id: '3',
      title: 'How long has your stuffy nose lasted',
      data: [
        {id: 1, option: 'Less than 10 days'},
        {id: 2, option: 'More than 10 days but less than 3 months'},
        {id: 3, option: 'More than 3 months'},
      ],
    },
    {
      id: '4',
      title: 'Has your stuffy nose recurred after briefly improving ?',
      data: [
        {id: 1, option: 'Yes'},
        {id: 2, option: 'No'},
        {id: 3, option: 'Dont Know'},
      ],
    },
    {
      id: '5',
      title:
        'Have you often had similar headaches within the last three months?',
      data: [
        {id: 1, option: 'Yes'},
        {id: 2, option: 'No'},
      ],
    },
    {
      id: '6',
      title: 'How long have you had your headache for?',
      data: [
        {id: 1, option: 'Less than 1 hour'},
        {id: 2, option: 'More than 1 hour but less than 1 day'},
        {id: 3, option: 'More than 1 day'},
      ],
    },
    {
      id: '7',
      title:
        'Did your headache start all of a sudden and reach its peak in a few minutes?',
      data: [
        {id: 1, option: 'Yes'},
        {id: 2, option: 'No'},
        {id: 3, option: 'Dont Know'},
      ],
    },
    {
      id: '8',
      title: 'Do you have pain in any part of your face?',
      data: [
        {id: 1, option: 'Yes'},
        {id: 2, option: 'No'},
        {id: 3, option: 'Dont Know'},
      ],
    },
    {
      id: '9',
      title: 'Where is your headache located?',
      data: [
        {id: 1, option: 'All Over'},
        {id: 2, option: 'On one side of the head'},
        {id: 3, option: 'Front of the head'},
        {id: 4, option: 'Back of the head'},
        {id: 5, option: 'In the temple area'},
      ],
    },
  ]);

  useEffect(() => {
    setSymptoms(props.route.params.value);
    getData();
  }, [offSet]);

  const onNext = value => {
    if (questions.length == offSet) {
      props.navigation.navigate('Report');
    } else {
      setResponse(value);
      setOffSet(prevOff => prevOff + 1);
    }
  };
  const onBack = () => {
    if (offSet == 1) {
      setStart(false);
    } else {
      setOffSet(prevOff => prevOff - 1);
      getData();
    }
  };

  const getData = () => {
    const resp = questions.find(item => item.id == offSet);
    setSources(resp);
  };

  const startQuestions = () => {
    getData();
    setStart(true);
    setResponse('Yes');
  };
  const stopQuestions = () => {
    setStart(false);
    setResponse('No');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          onPress={() => props.navigation.navigate('Home')}
          name="arrow-back"
          size={40}
          color="black"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginRight: 10,
              borderRadius: 20,
            }}
            source={require('../assets/images/profile.png')}
          />

          <Typo size="24">NemoBot</Typo>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        {start ? (
          <View>
            <View style={styles.messageRight}>
              <TouchableOpacity onPress={onBack}>
                <View
                  style={{
                    ...styles.messageBox,
                    width: 180,
                    backgroundColor: '#3D3E64',
                  }}>
                  <Typo size="18" color="white">
                    {response}
                  </Typo>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.messageLeft}>
              <View>
                <View
                  style={{
                    ...styles.questionBox,
                    backgroundColor: '#ececef',
                  }}>
                  <Typo size="18" color="#3D3E64">
                    {sources.title}
                  </Typo>
                </View>
                <View
                  style={{
                    ...styles.messageBox,
                    width: 180,
                    backgroundColor: '#ececef',
                  }}>
                  <FlatList
                    data={sources.data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity onPress={() => onNext(item.option)}>
                          <View
                            style={{
                              ...styles.messageBox,
                              width: 160,
                              backgroundColor: 'white',
                            }}>
                            <Typo size="16" color="#3D3E64">
                              {item.option}
                            </Typo>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.messageRight}>
              <View
                style={{
                  ...styles.messageBox,
                  backgroundColor: '#3D3E64',
                  width: 180,
                }}>
                <Typo size="18" color="white">
                  Begin
                </Typo>
              </View>
            </View>
            <View style={styles.messageLeft}>
              <View>
                <FlatList
                  data={symptoms}
                  keyExtractor={item => item.symptomId}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          ...styles.messageBox,
                          backgroundColor: '#ececef',
                          width: 180,
                        }}>
                        <Typo size="18" color="#3D3E64">
                          {item.symptomName}
                        </Typo>
                      </View>
                    );
                  }}
                />
                <View
                  style={{
                    ...styles.messageBox,
                    backgroundColor: '#ececef',
                    width: 180,
                  }}>
                  <Typo size="18" color="#3D3E64">
                    Ready?
                  </Typo>
                </View>
                {/* <View style={styles.options}>
                  <TouchableOpacity onPress={startQuestions}>
                    <View
                      style={{
                        ...styles.messageBox,
                        width: 160,
                        backgroundColor: 'white',
                      }}>
                      <Typo size="16" color="#3D3E64">
                        Yes
                      </Typo>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={stopQuestions}>
                    <View
                      style={{
                        ...styles.messageBox,
                        width: 160,
                        backgroundColor: 'white',
                      }}>
                      <Typo size="16" color="#3D3E64">
                        No
                      </Typo>
                    </View>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={styles.options}>
        <View
          style={{
            ...styles.messageBox,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={startQuestions}>
            <Typo size="18" color="#3D3E64">
              Yes
            </Typo>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.messageBox,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={stopQuestions}>
            <Typo size="18" color="#3D3E64">
              No
            </Typo>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 15,
    width: '46%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#DFDFDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBox: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 5,
  },
  questionBox: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    width: 180,
    marginVertical: 5,
  },
  messageRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  messageLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  options: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#ececef',
  },
});
export default SymptomsNext;
