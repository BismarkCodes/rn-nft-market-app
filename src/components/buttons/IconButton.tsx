import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/colors';
import {useSelector} from 'react-redux';

const IconButton: React.FC<{
  name: string;
  size: number;
  color: string;
  style: object;
  onPress: object;
}> = ({name, size, color, style, onPress}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // background style
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
  };
  // ripple config
  const rippleConfig = {
    color: isDarkMode ? Colors.bg.grey.dark : Colors.bg.grey.light,
    // radius: 20,
    borderless: true,
    // forground: false,
  };

  return (
    <Pressable
      dis
      android_ripple={rippleConfig}
      style={[styles.container, backgroundStyle, style]}
      onPress={onPress}>
      <Ionicons
        name={name}
        size={size || 24}
        color={
          color || isDarkMode ? Colors.text.normal_dark : Colors.text.normal
        }
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
