import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../themes';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput placeholder="Search" style={styles.input} />
        <TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <MagnifyingGlassIcon
              size="25"
              strokeWidth={2}
              color={'white'}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 76,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    paddingHorizontal: 4,
    backgroundColor: '#e6e6e6',
  },
  input: {
    padding: 10,
    flex: 1,
    fontWeight: '700',
    color: '#000',
  },
  icon: {
    borderRadius: 9999,
    padding: 8,
    backgroundColor: themeColors.bgLight,
  },
});

export default SearchBar;
