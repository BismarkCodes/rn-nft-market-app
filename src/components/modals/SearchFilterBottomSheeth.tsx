import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/colors';
import Seperator from '../Seperator';
import CustomText from '../text/CutomText';

const SearchFilterBottomSheeth: React.FC<{
  visible: boolean;
  onClose: object;
}> = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.bar} />
          <View style={styles.alertMessage}>
            <Ionicons
              name="ios-construct-outline"
              size={30}
              color={Colors.text.grey.light}
            />
            <Seperator type="small" />
            <CustomText
              text="Feature under development"
              style={{color: Colors.text.normal}}
            />
          </View>
          {/* 
             Future options include:
             1. Filter options for search.
          */}
        </View>
      </View>
    </Modal>
  );
};

export default SearchFilterBottomSheeth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: `${Colors.black}20`,
  },
  content: {
    minHeight: 150,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 15,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },

  bar: {
    width: 80,
    alignSelf: 'center',
    marginBottom: 'auto',
    height: 6,
    borderRadius: 4,
    backgroundColor: Colors.text.grey.light,
  },

  alertMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
