import {StyleSheet, View} from 'react-native';
import React from 'react';

import TabHeader from '../../../components/headers/main/TabHeader';
import FullScreenEmptyState from '../../../components/alerts/emptyState/FullScreenEmptyState';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <TabHeader title="Profile" />
      <FullScreenEmptyState
        iconName="ios-construct-outline"
        text="Feature under development"
      />
      {/* 
      Future features:
      1. Settings
      2. Transactions
      3. Stats
      etc.
      */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
