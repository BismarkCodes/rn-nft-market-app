import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {Colors} from '../../constants/colors';

const FullScreen: React.FC<{visible: boolean}> = ({visible}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
    display: visible ? 'flex' : 'none',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <ActivityIndicator
        size="large"
        color={isDarkMode ? Colors.text.grey.dark : Colors.text.grey.light}
      />
    </View>
  );
};

export default FullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
