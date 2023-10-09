import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { coffeeItems } from '../constants';
import { themeColors } from '../themes';
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';

const CoffeeCardList = () => {
  return (
    <View style={styles.container}>
      <Carousel
        containerCustomStyle={{ overflow: 'visible' }}
        data={coffeeItems}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            {/* Image */}
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>

            {/* Text */}
            <View style={styles.textBlock}>
              {/* Name */}
              <Text style={styles.name}>{item.name}</Text>

              {/* Star */}
              <View style={styles.star}>
                <StarIcon size="15" color="white" />
                <Text style={styles.starText}>{item.stars}</Text>
              </View>

              {/* Volume */}
              <View style={styles.volumeBlock}>
                <Text style={[styles.volumeText, { opacity: 0.6 }]}>
                  Volume{' '}
                </Text>
                <Text style={styles.volumeText}>{item.volume}</Text>
              </View>

              {/* Price */}
              <View style={styles.priceBlock}>
                <Text style={styles.price}>$ {item.price}</Text>
                <TouchableOpacity
                  style={{
                    padding: 16,
                    backgroundColor: 'white',
                    borderRadius: 9999,
                    elevation: 10,
                  }}>
                  <PlusIcon
                    size="25"
                    strokeWidth={2}
                    color={themeColors.bgDark}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        firstItem={1}
        loop={true}
        inactiveSlideOpacity={1}
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
    flex: 1,
  },
  cardContainer: {
    borderRadius: 40,
    backgroundColor: themeColors.bgDark,
    height: 350,
    width: 250,
    elevation: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -40,
    elevation: 10,
  },
  image: {
    width: 160,
    height: 160,
  },
  textBlock: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginTop: 12,
    gap: 12,
  },
  name: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    zIndex: 10,
  },
  star: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    padding: 4,
    paddingHorizontal: 8,
    marginLefts: 4,
    width: 58,
  },
  starText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  volumeBlock: {
    flexDirection: 'row',
    marginLeft: 4,
    zIndex: 10,
    marginBottom: 24,
  },
  volumeText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  priceBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themeColors.bgDark,
  },
});

export default CoffeeCardList;
