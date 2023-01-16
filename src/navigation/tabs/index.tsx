import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import {Screens} from '../screens';
import {Colors} from '../../constants/colors';

// configs
const Tab = createBottomTabNavigator();

const MainTabNav = () => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: isDarkMode
            ? Colors.bg.card.dark
            : Colors.bg.card.light,
          borderTopWidth: 0.5,
          borderTopColor: isDarkMode ? Colors.border.dark : Colors.border.light,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          // configure tab bar icon
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'nft_auction') {
            iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // tab bar icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: {marginBottom: 5, marginTop: -5},
        tabBarActiveTintColor: isDarkMode ? Colors.white : Colors.black,
        tabBarInactiveTintColor: isDarkMode
          ? Colors.text.grey.dark
          : Colors.text.grey.light,
      })}>
      <Tab.Screen
        name="home"
        component={Screens.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="favorite"
        component={Screens.Favorite}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="nft_auction"
        component={Screens.NFTAuction}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="profile"
        component={Screens.Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainTabNav;
