import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Intro from './src/components/Intro';
import { useState, useEffect } from 'react';
import { COLOR } from './src/contants/themes'
import SplashScreen from './src/components/SplashScreen';
import FirstSignIn from './src/components/FirstSignIn';
import { BUTTON } from './src/contants/button';

const slides = [
  {
    key: 1,
    title: 'Welcome',
    text: 'Join with us, let the Music Speak !',
    image: require('./src/Imgs/Picture1.png'),
    backgroundColor: '#FFA31A',
  },
  {
    key: 2,
    title: 'Listening is everything',
    text: 'Millionss of songs. Available on MusicHub.',
    image: require('./src/Imgs/Pic.png'),
    backgroundColor: '#FFA31A',
  },
  {
    key: 3,
    title: 'Browse effectively',
    text: 'Explore top tracks, new releases and the right playlist for every moment.',
    image: require('./src/Imgs/Picture3.png'),
    backgroundColor: '#FFA31A',
  },
  {
    key: 4,
    title: 'Let’s go',
    text: 'Sign up for free music on your phone.',
    image: require('./src/Imgs/Picture4.png'),
    backgroundColor: '#FFA31A',
  },

]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false)
  const [splashScreen, setSplashScreen] = useState(false)
  const text = 'Sign up'
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!splashScreen) {
    return (
      <SplashScreen />
    )
  }
  if (!showHomePage) {
    return (
      <>
        <AppIntroSlider data={slides} renderItem={({ item }) => {
          return (
            <Intro title={item.title} image={item.image} text={item.text} />
          )
        }}
          showSkipButton
          activeDotStyle={{
            backgroundColor: COLOR.primary,
            width: 40
          }}
          onDone={() => setShowHomePage(true)}
        />
      </>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <FirstSignIn />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
