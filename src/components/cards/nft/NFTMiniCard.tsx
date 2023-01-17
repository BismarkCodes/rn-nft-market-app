import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import CustomTitle from '../../text/CutomTitle';
import CreatorMiniCard from './CreatorMiniCard';
import {Colors} from '../../../constants/colors';

interface Props {
  item: object;
  type: 'full' | 'mini';
  onPress: object;
}

const NFTMiniCard: React.FC<Props> = ({item, type, onPress}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups
  const cardBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
    borderColor: isDarkMode ? Colors.border.dark : Colors.border.light,
    borderWidth: 1,
  };

  const imageBackgroundStyle = {
    backgroundColor: item?.metadata.background_color
      ? `#${item?.metadata.background_color}`
      : isDarkMode
      ? Colors.bg.grey.dark
      : Colors.bg.grey.light,
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        cardBackgroundStyle,
        type === 'full' && {width: '100%', height: 300, minHeight: 300},
      ]}>
      {/* NFT Image */}
      <View
        style={[
          styles.imageCard,
          type === 'full' && {height: 200},
          imageBackgroundStyle,
        ]}>
        <FastImage
          source={{
            uri: item?.metadata?.image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
          style={[styles.image]}
        />
      </View>
      {/* Text content */}
      <View style={styles.content}>
        {/* header */}
        <View style={styles.contentHeader}>
          {/* NFT Name */}

          <CustomTitle
            numberOfLines={2}
            type={type === 'mini' ? 'tiny' : 'small'}
            text={item?.metadata?.name}
            // style={{flex: 1}}
          />
        </View>
        {/* footer */}
        <View style={styles.contentFooter}>
          {/* creators and NFT price info */}
          <CreatorMiniCard
            type="small"
            coinType="BTC"
            coinPrice={0.89}
            creatorId="23"
            creatorName="Bismark Okletey"
            // url to my photo.
            imageUrl="https://media.licdn.com/dms/image/C4E03AQHze753CvLRRw/profile-displayphoto-shrink_200_200/0/1645611123252?e=1679529600&v=beta&t=-DaMmOro3A0s7B6YkQDDUt8L_8sn5ifUfsX6YusESp4"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default NFTMiniCard;

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 230,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  imageCard: {
    height: 130,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  content: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  contentHeader: {
    flex: 1,
    marginBottom: 5,
  },
});
