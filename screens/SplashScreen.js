import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import tw from 'twrnc';

const SplashScreen = ({ navigation }) => {
  const lottieAnim = useRef(null);
  const textAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    lottieAnim.current.play();

    Animated.timing(textAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('SignInScreen');
    }, 4000);
  }, [navigation, textAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <View style={styles.content}>
        <LottieView
          ref={lottieAnim}
          source={require('../src/Splash.json')}
          autoPlay
          loop
          style={tw`w-[100] h-[100]`}
        />
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: textAnim,
            },
          ]}
        >
          <Text style={styles.text}>UDB Contacts</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#121212', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SplashScreen;
