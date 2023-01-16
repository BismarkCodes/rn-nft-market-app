import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import {Colors} from '../../constants/colors';
import Seperator from '../Seperator';

const SearchInput = () => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  //   other functions and setups
  const inputTextColor = {
    color: isDarkMode ? Colors.text.normal_dark : Colors.text.normal,
  };

  const iconColor = {
    color: isDarkMode ? Colors.text.grey.dark : Colors.text.grey.light,
  };

  return (
    <View style={[styles.container]}>
      <Ionicons name="search-outline" size={24} color={iconColor.color} />
      <Seperator type="tiny" />
      <TextInput
        style={[styles.input, inputTextColor]}
        placeholder="Search..."
        placeholderTextColor={iconColor.color}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
});
