import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {GlobalStyles} from '../styles/GlobalStyles';
import {Colors} from '../../constants/colors';

const CustomTitle: React.FC<{
  text: string;
  numberOfLines: number;
  type: 'big' | 'medium' | 'small' | 'tiny';
  style: object;
}> = ({text, numberOfLines, type, style}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          color: isDarkMode ? Colors.text.title.dark : Colors.text.title.light,
        },
        type === 'big'
          ? GlobalStyles.text.title.big
          : type === 'medium'
          ? GlobalStyles.text.title.mid
          : type === 'small'
          ? GlobalStyles.text.title.small
          : GlobalStyles.text.title.tiny,
        style,
      ]}>
      {text}
    </Text>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({});
