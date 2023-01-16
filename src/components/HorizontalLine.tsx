import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {Colors} from '../constants/colors';

const HorizontalLine = () => {
  //   hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups
  const lineStyle = {
    backgroundColor: isDarkMode ? Colors.border.dark : Colors.border.light,
  };
  return <View style={[styles.line, lineStyle]} />;
};

export default HorizontalLine;

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
  },
});
