import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import TabHeader from '../../../components/headers/main/TabHeader';
import FullScreenEmptyState from '../../../components/alerts/emptyState/FullScreenEmptyState';

const Favorite = () => {
  return (
    <View style={styles.container}>
      <TabHeader title="Saved NFTs" />
      <FullScreenEmptyState
        iconName="ios-construct-outline"
        text="Feature under development"
      />
      {/* 
      Future features:
      1. User will be able to view saved NFTs
      2. User can unsave NFTs
      3. User can add NFTs to cart
      */}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
