import React, {FC} from 'react';
import {
  Canvas,
  LinearGradient,
  vec,
  RoundedRect,
  Shadow,
} from '@shopify/react-native-skia';
import {colors} from '../sharedValues';

interface CardProps {
  cardHeight: number;
  cardWidth: number;
  canvasPadding: number;
}

export const Card: FC<CardProps> = ({cardHeight, cardWidth, canvasPadding}) => {
  return (
    <Canvas
      style={{
        width: cardWidth + canvasPadding, // canvasPadding allows room for shadow to show
        height: cardHeight + canvasPadding,
      }}
    >
      <RoundedRect
        r={10}
        x={canvasPadding / 2} // places it in middle of canvas
        y={canvasPadding / 2} // places it in middle of canvas
        width={cardWidth}
        height={cardHeight}
      >
        <LinearGradient
          start={vec(cardHeight / 2, 0)}
          end={vec(cardHeight / 2, cardHeight)}
          colors={[colors.darker, colors.lighter]}
        />

        <Shadow dx={-4} dy={-4} blur={10} color={colors.shadowLight} />
        <Shadow dx={0} dy={8} blur={10} color={colors.shadowDark} />
      </RoundedRect>
    </Canvas>
  );
};
