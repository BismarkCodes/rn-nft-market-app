import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';

import NFTMiniCard from '../../cards/nft/NFTMiniCard';
import Seperator from '../../Seperator';
import {Colors} from '../../../constants/colors';
import {useSelector} from 'react-redux';
import CustomText from '../../text/CutomText';

const LoadMoreComponent = ({isDarkMode}) => {
  return (
    <View style={[styles.loadmore]}>
      <ActivityIndicator
        size="small"
        color={isDarkMode ? Colors.text.grey.dark : Colors.text.grey.light}
      />
      <Seperator type="small" />
      <CustomText text="Load more..." />
    </View>
  );
};

const NFTMiniList: React.FC<{
  data: object;
  horizontal: boolean;
  loadMore: boolean;
  onEndReached: object;
  onEndReachedThreshold: number;
}> = ({data, horizontal, loadMore, onEndReached, onEndReachedThreshold}) => {
  const {isDarkMode} = useSelector(state => state.theme);

  // hooks
  const navigation = useNavigation();

  // other functions
  // handle onpress
  function handleOnPress(item: object) {
    navigation.navigate('nft_details', {data: item});
  }
  return (
    <FlashList
      estimatedItemSize={200}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      data={data}
      contentContainerStyle={{
        paddingHorizontal: !horizontal ? 15 : 0,
        paddingVertical: 10,
      }}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <NFTMiniCard
          item={item}
          type={horizontal ? 'mini' : 'full'}
          onPress={() => handleOnPress(item)}
        />
      )}
      ItemSeparatorComponent={() => <Seperator type={'small'} />}
      ListHeaderComponent={() =>
        horizontal ? <Seperator type={'small'} /> : <View />
      }
      ListFooterComponent={() =>
        onEndReachedThreshold === 0 && !horizontal && loadMore ? (
          <LoadMoreComponent isDarkMode={isDarkMode} />
        ) : (
          <Seperator type={'small'} />
        )
      }
    />
    // </View>
  );
};

export default NFTMiniList;

const styles = StyleSheet.create({
  contentContainer: {},
  loadmore: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
