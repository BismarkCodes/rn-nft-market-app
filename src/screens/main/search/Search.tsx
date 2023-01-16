import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import FullScreenEmptyState from '../../../components/alerts/emptyState/FullScreenEmptyState';
import SearchHeader from '../../../components/headers/main/SearchHeader';
import SearchFilterBottomSheeth from '../../../components/modals/SearchFilterBottomSheeth';

const Search = () => {
  const [showFilter, setShowFilter] = useState(false);

  // other functions and setups
  function handleToggleFilter() {
    setShowFilter(!showFilter);
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <SearchHeader onFilterPress={handleToggleFilter} />
      {/* body */}
      <FullScreenEmptyState
        iconName="ios-construct-outline"
        text="Feature under development"
      />

      {/* 
      future features include:
      1. Live search of NFTs
      2. List of search results
      */}

      {/* footer */}
      {/* search filter */}
      <SearchFilterBottomSheeth
        visible={showFilter}
        onClose={handleToggleFilter}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
