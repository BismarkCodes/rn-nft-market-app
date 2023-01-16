import {StyleSheet, View} from 'react-native';
import React from 'react';

import FullScreenEmptyState from '../../../components/alerts/emptyState/FullScreenEmptyState';
import BackHeader from '../../../components/headers/main/BackHeader';

const Inbox = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <BackHeader title="Notifications" />
      {/* body */}
      <FullScreenEmptyState
        iconName="ios-construct-outline"
        text="Feature under development"
      />
      {/* footer */}
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
