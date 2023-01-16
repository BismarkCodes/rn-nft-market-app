import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../styles/GlobalStyles';
import CustomTitle from '../../text/CutomTitle';
import {Colors} from '../../../constants/colors';
import IconButton from '../../buttons/IconButton';
import Seperator from '../../Seperator';
import RoundImageCard from '../../cards/image/RoundImageCard';

const HomeMainHeader: React.FC<{
  title: string;
  border: boolean;
}> = ({title, border}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);
  const navigation = useNavigation();

  //   other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
    borderBottomWidth: border ? 1 : 0,
    borderBottomColor: isDarkMode ? Colors.border.dark : Colors.border.light,
  };

  return (
    <View
      style={[GlobalStyles.header.default, backgroundStyle, styles.container]}>
      {/* user profile photo */}
      <RoundImageCard imageUrl="https://avatars.githubusercontent.com/u/53179940?v=4" />
      <Seperator type={'small'} />
      {/* header title */}
      <CustomTitle style={{marginRight: 'auto'}} text={title} type={'medium'} />
      {/* search button */}
      <IconButton
        name="search-outline"
        onPress={() => navigation.navigate('search')}
      />
      <Seperator type={'tiny'} />
      {/* notifications button */}
      <IconButton
        name="notifications-outline"
        onPress={() => navigation.navigate('inbox')}
      />
    </View>
  );
};

export default HomeMainHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    zIndex: 10,
  },
});
