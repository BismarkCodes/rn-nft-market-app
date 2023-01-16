import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import Seperator from '../../Seperator';
import {Colors} from '../../../constants/colors';
import CategoryTextItem from '../list items/CategoryTextItem';

const CategoryTextList: React.FC<{
  data: object;
  activeCategory: string;
  itemOnPress: object;
}> = ({data, activeCategory, itemOnPress}) => {
  // hooks
  const {isDarkMode} = useSelector(state => state.theme);

  // other functions and setups
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bg.card.dark : Colors.bg.card.light,
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      style={[styles.categoryList, backgroundStyle]}
      contentContainerStyle={[styles.contentContainer]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <CategoryTextItem
          item={item}
          active={item === activeCategory}
          onPress={() => itemOnPress(item)}
        />
      )}
      ItemSeparatorComponent={() => <Seperator type={'small'} />}
      ListHeaderComponent={() => <Seperator type={'small'} />}
      ListFooterComponent={() => <Seperator type={'small'} />}
    />
  );
};

export default CategoryTextList;

const styles = StyleSheet.create({
  categoryList: {
    height: 45,
  },
  contentContainer: {
    alignItems: 'center',
  },
});
