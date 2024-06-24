

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import StringsOfLanguages from './StringsOfLanguages';

const LanguageSelectionScreen = ({navigation}) => {
  const lang = [
    {shortform: 'hi', longform: 'Hindi'},
    {shortform: 'ma', longform: 'Marathi'},
    {shortform: 'en', longform: 'English'},
    {shortform: 'fr', longform: 'French'},
    {shortform: 'bd', longform: 'Bangla'},
  ];


  const settext = (value) => {
    StringsOfLanguages.setLanguage(value);
    navigation.navigate('ContentScreen', {selectedLanguage: value});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Please Select Preferred Language
        </Text>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/language.png',
          }}
          style={styles.imageStyle}
        />
        <ScrollView style={{marginTop: 20, width: '80%'}}>
          {lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}>
                {item.longform}
              </Text>
              <View style={styles.saparatorStyle} />
            </View>
          ))}

        </ScrollView>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'grey',
          }}>
          Localization in React Native 
         (Multi Language App)
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headingStyle: {
    color: '#191919',
    fontSize: 16,
    textAlign: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
  elementContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  textStyle: {
    color: '#191919',
    fontSize: 16,
  },
  saparatorStyle: {
    height: 0.3,
    width: '60%',
    backgroundColor: '#C2C2C2',
    marginTop: 5,
  },
});

export default LanguageSelectionScreen;