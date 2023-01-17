import {StyleSheet, View} from 'react-native';
import React from 'react';

// config
interface Props {
  type: 'big' | 'medium' | 'small' | 'tiny';
}

function returnSeperatorDimensions(type: string) {
  return type === 'big'
    ? 32
    : type === 'medium'
    ? 24
    : type === 'small'
    ? 16
    : 8;
}

const Seperator: React.FC<Props> = ({type}) => {
  return (
    <View
      style={{
        width: returnSeperatorDimensions(type),
        height: returnSeperatorDimensions(type),
      }}
    />
  );
};

export default Seperator;

const styles = StyleSheet.create({});
