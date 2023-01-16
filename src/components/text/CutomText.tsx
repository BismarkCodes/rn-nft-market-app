import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {GlobalStyles} from '../styles/GlobalStyles';
import {Colors} from '../../constants/colors';

// config and other functions
interface TextColorConfig {
  isDark: boolean;
  isGrey: boolean;
}

function determinTextColor(config: TextColorConfig) {
  let color = '';
  if (config.isDark) {
    if (config.isGrey) {
      color = Colors.text.grey.dark;
    } else {
      color = Colors.text.normal_dark;
    }
  } else {
    if (config.isGrey) {
      color = Colors.text.grey.light;
    } else {
      color = Colors.text.normal;
    }
  }
  return color;
}

const CustomText: React.FC<{
  text: string;
  numberOfLines: number;
  bold: boolean;
  grey: boolean;
  style: object;
}> = ({text, numberOfLines,bold, grey, style}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups

  return (
    <Text
    numberOfLines={numberOfLines}
      style={[
        {
          color: determinTextColor({isDark: isDarkMode, isGrey: grey}),
        },
        GlobalStyles.text.text,
        bold && GlobalStyles.text.bold,
        style,
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
