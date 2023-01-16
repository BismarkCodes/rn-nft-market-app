import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import CustomText from '../../text/CutomText';
import {Colors} from '../../../constants/colors';

const CategoryTextItem: React.FC<{
  item: string | object;
  active: boolean;
  onPress: object;
}> = ({item, active, onPress}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // ripple config
  const rippleConfig = {
    color: isDarkMode ? Colors.bg.grey.dark : Colors.bg.grey.light,
    // radius: 20,
    borderless: true,
    // forground: false,
  };
  return (
    <Pressable
      android_ripple={rippleConfig}
      onPress={onPress}
      style={styles.container}>
      <CustomText
        text={item?.toUpperCase()}
        bold={active}
        grey={!active}
        style={styles.text}
      />
    </Pressable>
  );
};

export default CategoryTextItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    marginVertical: 10,
  },
  text: {textTransform: 'capitalize', paddingHorizontal: 6},
});
