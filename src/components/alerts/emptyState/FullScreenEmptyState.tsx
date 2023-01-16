import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../../constants/colors';
import CustomText from '../../text/CutomText';
import Seperator from '../../Seperator';

const FullScreenEmptyState: React.FC<{
  text: string;
  iconName: string;
  iconSize: number;
}> = ({text, iconName, iconSize}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  //   other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Ionicons
        name={iconName}
        size={iconSize || 65}
        color={isDarkMode ? Colors.text.grey.dark : Colors.text.grey.light}
      />
      <Seperator type="big" />
      <CustomText text={text} />
    </View>
  );
};

export default FullScreenEmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
