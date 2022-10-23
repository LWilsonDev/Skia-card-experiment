import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NonSkiaDisplayCard from './src/components/NonSkiaDisplayCard';
import DisplayCard from './src/components/SkiaDisplayCard';
import {colors} from './src/sharedValues';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.header}>{Platform.OS}</Text>
        <Text style={styles.text}>Skia:</Text>
        <DisplayCard />
        <Text style={styles.text}>Non Skia:</Text>
        <NonSkiaDisplayCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  text: {
    fontSize: 28,
    paddingTop: 20,
  },
  header: {
    fontSize: 38,
    paddingBottom: 20,
  },
});
