import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

import CustomText from '../../text/CutomText';
import Seperator from '../../Seperator';
import {Colors} from '../../../constants/colors';

interface Props {
  type: 'small' | 'default';
  imageUrl: string;
  creatorName: string;
  creatorId: string;
  coinPrice: number;
  coinType: 'BTC' | 'ETH';
  containerStyle: object;
}

const CreatorMiniCard: React.FC<Props> = ({
  type,
  imageUrl,
  creatorName,
  creatorId,
  coinPrice,
  coinType,
  containerStyle,
}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions && setups
  // background style
  const imageBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.grey.dark : Colors.bg.grey.light,
    borderColor: isDarkMode ? Colors.bg.grey.dark : Colors.bg.grey.light,
  };
  return (
    <View
      style={[
        styles.container,
        type === 'small' && {paddingVertical: 5},
        containerStyle,
      ]}>
      {/* creator profile photo */}
      <View
        style={[
          type === 'small' ? styles.imageCardSmall : styles.imageCardDefault,
          imageBackgroundStyle,
        ]}>
        <FastImage
          source={{
            uri: imageUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.image}
        />
      </View>
      <Seperator type="tiny" />

      {/* creator full name */}
      <CustomText
        numberOfLines={type === 'default' ? 2 : 1}
        text={creatorName}
        style={{flex: 1, fontSize: type === 'default' ? 20 : 13}}
      />
      <Seperator type="tiny" />

      {/* NFT Price */}
      <View style={styles.coinContainer}>
        {/* coin icon */}
        {coinType === 'BTC' ? (
          <FontAwesome
            name="bitcoin"
            size={type === 'small' ? 13 : 20}
            color={isDarkMode ? Colors.text.normal_dark : Colors.text.normal}
          />
        ) : (
          <MaterialCommunityIcons
            name="ethereum"
            size={type === 'small' ? 13 : 20}
            color={isDarkMode ? Colors.text.normal_dark : Colors.text.normal}
          />
        )}
        <Seperator type="tiny" />
        {/* coin price */}
        <CustomText
          text={`${coinPrice} ${coinType}`}
          style={{fontSize: type === 'default' ? 16 : 13}}
          bold
        />
      </View>
    </View>
  );
};

export default CreatorMiniCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  imageCardSmall: {
    width: 20,
    height: 20,
    borderRadius: 30,
    borderWidth: 1,
  },
  imageCardDefault: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  coinContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
