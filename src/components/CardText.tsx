import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {FontAwesome} from '@expo/vector-icons';

interface CardTextProps {
  cardWidth: number;
}

const CardText: FC<CardTextProps> = ({cardWidth}) => {
  return (
    <View style={[styles.container, {width: cardWidth}]}>
      <View style={styles.iconContainer}>
        <FontAwesome name="bed" size={40} color="white" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Sleeping for: 26 minutes</Text>
        <Text style={styles.subtitle}>Remaining: 19 minutes</Text>
        <Text style={styles.subtitle}>Alarm set for 45 minutes</Text>
      </View>
    </View>
  );
};

export default CardText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'center',
    padding: 15,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
});
