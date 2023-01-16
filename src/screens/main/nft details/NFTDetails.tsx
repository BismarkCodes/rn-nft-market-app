import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import BackHeader from '../../../components/headers/main/BackHeader';
import {Colors} from '../../../constants/colors';
import CustomTitle from '../../../components/text/CutomTitle';
import Seperator from '../../../components/Seperator';
import CreatorMiniCard from '../../../components/cards/nft/CreatorMiniCard';
import CustomText from '../../../components/text/CutomText';
import MainButton from '../../../components/buttons/MainButton';
import HorizontalLine from '../../../components/HorizontalLine';

const NFTDetails = ({navigation, route}) => {
  const {data: nftData} = route?.params;

  //   hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
  };

  const nftImageBackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.border.dark : Colors.border.light,
    borderColor: isDarkMode ? Colors.bg.grey.dark : Colors.bg.grey.light,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      {/* header */}
      <BackHeader />
      {/* body */}
      <ScrollView style={styles.body}>
        <View style={[styles.nftImageContainer, nftImageBackgroundStyle]}>
          <FastImage
            source={{
              uri: nftData?.metadata?.image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
            style={[styles.nftImage]}
          />
        </View>
        <Seperator type="medium" />
        <CustomTitle
          type={'big'}
          text={nftData?.metadata?.name}
          numberOfLines={3}
        />
        <Seperator type="tiny" />
        <CreatorMiniCard
          type="default"
          coinType={'BTC'}
          coinPrice={0.23}
          creatorName={'Bismark Okletey'}
          imageUrl="https://media.licdn.com/dms/image/C4E03AQHze753CvLRRw/profile-displayphoto-shrink_200_200/0/1645611123252?e=1679529600&v=beta&t=-DaMmOro3A0s7B6YkQDDUt8L_8sn5ifUfsX6YusESp4"
        />
        <HorizontalLine />
        <Seperator type="small" />
        <CustomTitle type={'small'} text={'Description'} numberOfLines={3} />
        <Seperator type="tiny" />
        <CustomText
          text={
            nftData?.metadata?.description || 'No description for this NFT.'
          }
          style={styles.description}
          grey={!nftData?.metadata?.description.length}
        />
        <Seperator type="big" />
      </ScrollView>

      {/* footer */}
      <View style={styles.footer}>
        {/* add to cart button */}
        <MainButton text={'Place your Bid'} />
      </View>
    </View>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 15,
  },
  nftImageContainer: {
    height: 300,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  description: {
    lineHeight: 25,
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
