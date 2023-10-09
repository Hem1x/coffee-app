import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { themeColors } from '../themes';

import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline';

export default function Header() {
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.avatar}
        />
        <View style={styles.location}>
          <MapPinIcon size="25" color={themeColors.bgLight} />
          <Text style={styles.locationText}>Moscow, Russia</Text>
        </View>
        <BellIcon size="27" color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 9999,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
