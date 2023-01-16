import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../styles/GlobalStyles';
import CustomTitle from '../../text/CutomTitle';
import {Colors} from '../../../constants/colors';
import IconButton from '../../buttons/IconButton';
import Seperator from '../../Seperator';
import SearchInput from '../../inputs/SearchInput';

const SearchHeader = ({title, border, onFilterPress}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);
  const navigation = useNavigation();

  //   other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
    borderBottomWidth: border ? 1 : 0,
    borderBottomColor: isDarkMode ? Colors.border.dark : Colors.border.light,
  };

  //   handle back button press
  function handleGoBack() {
    //   basic navigation feature
    navigation.goBack();
    //   you can add more code here to meet your needs.
    /* 
        Code goes here...
     */
  }

  return (
    <View
      style={[GlobalStyles.header.default, styles.container, backgroundStyle]}>
      {/* back button*/}
      <IconButton name="ios-chevron-back" onPress={handleGoBack} />
      <Seperator type={'small'} />
      {/* search input */}
      <SearchInput />
      <Seperator type={'tiny'} />
      {/* filter button */}
      <IconButton name="ios-options-outline" onPress={onFilterPress} />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
});
