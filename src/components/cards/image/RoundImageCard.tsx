import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

import {GlobalStyles} from '../../styles/GlobalStyles';
import {Colors} from '../../../constants/colors';

interface Props {
  imageUrl: string;
  containerStyle: object;
  imageStyle: object;
}

const RoundImageCard: React.FC<Props> = ({
  imageUrl,
  containerStyle,
  imageStyle,
}) => {
  const {isDarkMode} = useSelector(state => state.theme);

  const imageBackgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.text.grey.dark
      : Colors.text.grey.light,
    borderColor: isDarkMode ? Colors.bg.grey.dark : Colors.bg.grey.light,
  };

  return (
    <View
      style={[
        GlobalStyles.image.miniProfileCard,
        containerStyle,
        imageBackgroundStyle,
      ]}>
      <FastImage
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={[GlobalStyles.image.miniProfileImage, imageStyle]}
      />
    </View>
  );
};

export default RoundImageCard;

const styles = StyleSheet.create({});
