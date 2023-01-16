import changeNavigationBarColor from 'react-native-navigation-bar-color';

export const ChangeAndroidNavBarColor = async (color, light) => {
  try {
    changeNavigationBarColor(color || '#000000', light);
  } catch (e) {
    // console.log(e);
  }
};
