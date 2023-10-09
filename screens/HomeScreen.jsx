import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CoffeeCardList from '../components/CoffeeCardList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        style={styles.beansBg}
      />
      <Header />
      <SearchBar />
      <Categories />
      <CoffeeCardList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  beansBg: {
    width: '100%',
    height: 220,
    position: 'absolute',
    top: -45,
    opacity: 0.1,
  },
});

export default HomeScreen;
