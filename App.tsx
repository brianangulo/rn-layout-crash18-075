/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  LayoutAnimation,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="Press for Layout Anim"
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setIsOpen(prev => !prev);
            }}
          />
          {isOpen && (
            <View
              style={{
                width: '100%',
                height: 100,
                backgroundColor: 'red',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{width: '100%', height: 10, backgroundColor: 'white'}}
              />
              <View
                style={{width: '100%', height: 10, backgroundColor: 'white'}}
              />
              <View
                style={{width: '100%', height: 10, backgroundColor: 'white'}}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
