import * as React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import CardText from './CardText';
import {colors} from '../sharedValues';

export default function NonSkiaDisplayCard() {
  const {width} = useWindowDimensions();

  const cardWidth = width * 0.9;
  return (
    <View style={styles.button}>
      <LinearGradient
        colors={[colors.darker, colors.lighter]}
        style={styles.gradient}
      >
        <CardText cardWidth={cardWidth} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    borderRadius: 10,
    shadowColor: colors.shadowDark,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 7,
  },
  gradient: {borderRadius: 10},
  container: {marginTop: 30},
});
