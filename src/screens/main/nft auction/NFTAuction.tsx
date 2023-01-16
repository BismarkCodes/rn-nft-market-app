import {StyleSheet, View} from 'react-native';
import React from 'react';

import TabHeader from '../../../components/headers/main/TabHeader';
import FullScreenEmptyState from '../../../components/alerts/emptyState/FullScreenEmptyState';

const NFTAuction = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <TabHeader title="Auction" />
      <FullScreenEmptyState
        iconName="ios-construct-outline"
        text="Feature under development"
      />
      {/* 
      Future features:
      1. Here users can take part live auction of NFTs amongst themeselves and the creator of the NFT
      2. User can make bids on NFTs along side other users
      */}
    </View>
  );
};

export default NFTAuction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
