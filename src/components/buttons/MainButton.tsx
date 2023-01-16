import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {GlobalStyles} from '../styles/GlobalStyles';
import {Colors} from '../../constants/colors';
import CustomText from '../text/CutomText';

const MainButton: React.FC<{text: string; onPress: object}> = ({
  text,
  onPress,
}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.bg.button.main.dark
      : Colors.bg.button.main.light,
  };

  return (
    <Pressable
      style={[GlobalStyles.button.default, backgroundStyle]}
      onPress={onPress}>
      <CustomText text={text} style={styles.text} />
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
  },
});
