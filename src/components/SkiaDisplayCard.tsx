import {useWindowDimensions, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SkiaCard} from './SkiaCard';
import CardText from './CardText';

const DisplayCard = () => {
  const {width} = useWindowDimensions();
  const [textCardHeight, setTextCardHeight] = useState(0);

  const cardWidth = width * 0.9;
  const canvasPadding = 60;

  return (
    <View style={styles.wrap}>
      <SkiaCard
        cardHeight={textCardHeight}
        cardWidth={cardWidth}
        canvasPadding={canvasPadding}
      />
      <View
        onLayout={(e) => setTextCardHeight(e.nativeEvent.layout.height)}
        style={[styles.text, {top: canvasPadding / 2, left: canvasPadding / 2}]}
      >
        <CardText cardWidth={cardWidth} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
  },
  text: {
    position: 'absolute',
  },
});

export default DisplayCard;
