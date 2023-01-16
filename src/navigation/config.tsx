import {StyleSheet, Platform, useColorScheme, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import MainStackNav from './stack';
import {Colors} from '../constants/colors';
import {SET_IS_DARK_MODE} from '../redux/themeSlice';
import {ChangeAndroidNavBarColor} from '../functions/hooks/ChangeAndroidNavBarColor';

// configs

const Navigation = () => {
  // states

  // hooks
  const dispatch = useDispatch();
  const darkMode = useColorScheme() === 'dark';

  // useEffects
  // determin os theme mode and update redux theme state
  useEffect(() => {
    dispatch(SET_IS_DARK_MODE(darkMode));
  }, [darkMode]);

  // update AndroidNavBarColor
  useEffect(() => {
    if (Platform.OS.toLocaleLowerCase() === 'android') {
      ChangeAndroidNavBarColor(
        darkMode ? Colors.bg.nav.dark : Colors.bg.nav.light,
        darkMode ? false : true,
      );
    }
  }, [darkMode]);

  // other functions && setups
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: darkMode ? Colors.bg.dark : Colors.bg.light,
    },
  };

  // background style
  const backgroundStyle = {
    backgroundColor: darkMode ? Colors.bg.dark : Colors.bg.light,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      {/* status bar */}
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={darkMode ? Colors.bg.card.dark : Colors.bg.card.light}
      />
      {/* navigation */}
      <NavigationContainer theme={theme}>
        <MainStackNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
