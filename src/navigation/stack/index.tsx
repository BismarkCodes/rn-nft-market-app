import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from '../screens';
import MainTabNav from '../tabs';

const Stack = createNativeStackNavigator();

/*
  MainStackNav contains a nested Tabs Navigator (MainTabNav)

  # MainTabNav: 
    - handles routing between the main screens (Home or NFT Marketplace, Saves, Auction, and Profile).

  # MainStackNav: 
    - handles routing between the MainTabNav and other subscreens like Search, Notification, NFT Details, etc.
    
*/

const MainStackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={({route}) => ({
        animation: 'slide_from_right',
        animationDuration: 100,
      })}>
      <Stack.Screen
        name="main"
        component={MainTabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="inbox"
        component={Screens.Inbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="search"
        component={Screens.Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="nft_details"
        component={Screens.NFTDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNav;

const styles = StyleSheet.create({});
