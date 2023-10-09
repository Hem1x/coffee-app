import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { coffeeItems } from '../constants';
import { themeColors } from '../themes';

const CoffeeCardList = () => {
  return (
    <View style={styles.container}>
      <Carousel
        containerCustomStyle={{ overflow: 'visible' }}
        data={coffeeItems}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
        )}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        inactiveSlideScale={0.8}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={260}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
        swipeThreshold={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingVertical: 8,
  },
  cardContainer: {
    borderRadius: 40,
    backgroundColor: themeColors.bgDark,
    height: 350,
    width: 250,
  },
  imageContainer: {
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -64,
    zIndex: 40,
  },
  image: {
    width: 160,
    height: 160,
  },
});

export default CoffeeCardList;
