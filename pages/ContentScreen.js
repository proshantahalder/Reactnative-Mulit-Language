

import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import StringsOfLanguages from './StringsOfLanguages';

const ContentScreen = ({route, navigation}) => {
  useEffect(() => {
    let heading = '';
    if (route.params.selectedLanguage == 'hi') {
      heading = 'Selected Language Hindi';
    } else if (route.params.selectedLanguage == 'ma') {
      heading = 'Selected Language Marathi';
    } else if (route.params.selectedLanguage == 'en') {
      heading = 'Selected Language English';
    } else if (route.params.selectedLanguage == 'fr') {
      heading = 'Selected Language French';
    }
    else if (route.params.selectedLanguage == 'bd') {
      heading = 'Selected Language Bangla';
    }
    navigation.setOptions({title: heading});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {StringsOfLanguages.first}
        </Text>
        <Text style={styles.text}>
          {StringsOfLanguages.second}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          color: 'grey',
        }}>
        Localization in React Native (Multi Language App)
      </Text>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#191919',
    fontSize: 25,
    marginTop: 15,
  },
});

export default ContentScreen;