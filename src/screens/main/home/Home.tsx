import {
  StyleSheet,
  View,
  RefreshControl,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
// import {NFT_API_KEY} from '@env';

import HomeMainHeader from '../../../components/headers/main/HomeMainHeader';
import {NFT_CATEGORIES} from '../../../constants/data';
import CustomText from '../../../components/text/CutomText';
import Seperator from '../../../components/Seperator';
import {Colors} from '../../../constants/colors';
import CustomTitle from '../../../components/text/CutomTitle';
import CategoryTextList from '../../../components/lists/horizontal list/CategoryTextList';
import NFTMiniList from '../../../components/lists/horizontal list/NFTMiniList';
import FullScreen from '../../../components/loaders/FullScreen';
import {getDataFromAPI} from '../../../functions/apis/getDataFromAPI';
import {NFT_DATA} from '../../../constants/NFT_DATA';
import FullScreenEmptyState from '../../../components/alerts/emptyState/FullScreenEmptyState';

// purify nfts
function getNFTsWithOnlyPNGImages(data: object) {
  let nftsWithoutSvgImages = [];
  // console.log(data[0].metadata);
  if (data) {
    data?.map(nft => {
      if (
        nft.metadata?.image?.includes('.png') &&
        !nft.metadata?.image?.includes('ipfs://')
      ) {
        nftsWithoutSvgImages.push(nft);
      }
    });
  }

  return nftsWithoutSvgImages;
}

const Home = () => {
  // state
  const [loadingNFTs, setLoadingNFTs] = useState(true);
  const [NFTs, setNFTs] = useState([]);
  const [category, setCategory] = useState('art');
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(10);

  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // useEffects
  useEffect(() => {
    getNFTs();
  }, []);

  // other functions and setups
  // update nft state with api data
  function onSucces(data) {
    // console.log(data);
    setNFTs(getNFTsWithOnlyPNGImages(data));
    setTimeout(() => {
      setLoadingNFTs(false);
    }, 1000);
  }
  // catch errors when getting data from api
  function onError(error) {
    console.log('suskdjflskdf', error);
    setTimeout(() => {
      setLoadingNFTs(false);
    }, 1000);
  }
  // get nfts from rapid api
  function getNFTs() {
    // set the parameters for the getDataFromAPI method
    const NFT_API_CONFIG = {
      url: 'https://nft-explorer.p.rapidapi.com/search',
      params: {chain: 'eth', filter: 'name', offset: '0', q: 'ape'},
      headers: {
        // paste your rapid api header params here
      },
    };
    // initiate loader
    setLoadingNFTs(true);
    // get local nfts
    setNFTs(getNFTsWithOnlyPNGImages(NFT_DATA));
    // get nfts from rapid api
    // getDataFromAPI(NFT_API_CONFIG, onSucces, onError);
    setTimeout(() => {
      setLoadingNFTs(false);
    }, 1000);
  }

  // change category
  function handleChangeNFTCategory(data: string) {
    setCategory(data);
  }

  // load more nfts
  function handleLoadMore() {
    setLoadMore(true);
    // for local nft data. Just increasing the index for other nfts.
    setTimeout(() => {
      setPage(page + 10);
      setLoadMore(false);
    }, 3000);
    // you can set your page configs here for actual api here
    /*
      Your code goes here...
    */
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <HomeMainHeader title="NFT Market" />
      {/* nft categories */}
      {/* body */}
      {!loadingNFTs && NFTs.length === 0 && (
        <FullScreenEmptyState
          iconName={'ios-folder-outline'}
          text="No NFT's found at the moment."
        />
      )}
      {!loadingNFTs && NFTs.length > 0 && (
        <>
          <View style={[styles.categoryListContainer]}>
            <CategoryTextList
              data={NFT_CATEGORIES}
              activeCategory={category}
              itemOnPress={handleChangeNFTCategory}
            />
          </View>
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loadingNFTs} onRefresh={getNFTs} />
            }>
            {NFTs && (
              <>
                {/* trending nft */}
                <CustomTitle text="Trending" style={styles.sectionTitle} />
                {/* note: this data config is for local nft */}
                <NFTMiniList data={NFTs?.slice(0, 10)} horizontal />
                {/* other nfts */}
                <Seperator type="tiny" />
                <CustomTitle text="Others" style={styles.sectionTitle} />
                {/* note: this data config is for local nft */}
                <NFTMiniList
                  data={NFTs?.slice(10, 10 + page)}
                  loadMore={loadMore}
                  onEndReached={handleLoadMore}
                  onEndReachedThreshold={0}
                />
              </>
            )}
          </ScrollView>
        </>
      )}

      {/* footer */}
      {/* loaders and modals */}
      <FullScreen visible={loadingNFTs} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // paddingHorizontal: 15,
    paddingTop: 12,
  },
  categoryListContainer: {height: 45, zIndex: 0},
  sectionTitle: {paddingHorizontal: 15},
});
