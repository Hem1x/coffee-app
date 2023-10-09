import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants';
import { themeColors } from '../themes';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => {
          let isActive = item.id === activeCategory;
          let activeTextStyle = isActive
            ? { color: 'white' }
            : { color: 'black' };

          return (
            <TouchableOpacity
              style={[
                styles.category,
                {
                  backgroundColor: isActive
                    ? themeColors.bgLight
                    : 'rgba(0,0,0,0.07)',
                },
              ]}
              onPress={() => setActiveCategory(item.id)}>
              <Text style={[styles.categoryText, activeTextStyle]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  list: {
    overflow: 'visible',
  },
  category: {
    backgroundColor: 'rgba(0,0,0,0.07)',
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 9999,
    marginRight: 8,
  },
  categoryText: {
    fontWeight: '700',
  },
});

export default Categories;
