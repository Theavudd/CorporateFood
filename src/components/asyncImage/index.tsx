import React, {useState} from 'react';
import {vh} from '../../utils/dimensions';
import FastImage from 'react-native-fast-image';
import {FastImageProps} from 'react-native-fast-image';
import {View, Image, ViewProps, ImageProps, StyleSheet} from 'react-native';

interface Props {
  isSmallImg?: boolean;
  localImage?: ImageProps['source'];
  extraContainerStyle?: ViewProps['style'];
  uri: ImageProps['source'] | FastImageProps['source'];
  extraImgStyle?: ImageProps['style'] & FastImageProps['style'];
  resizeMode?: ImageProps['resizeMode'] & FastImageProps['resizeMode'];
  [key: string]: any;
}

export default function AsyncImage({
  uri,
  localImage,
  isSmallImg = true,
  extraImgStyle = {},
  resizeMode = 'cover',
  extraContainerStyle = {},
  ...rest
}: Props) {
  const [isError, setIsError] = useState(false);
  const imgUrl = typeof uri === 'string' ? uri : '';

  /**
   * update the error state in case of image couldn't load properly
   */
  const onError = () => {
    setIsError(true);
  };

  const renderImage = () => {
    if (isError || localImage) {
      return (
        <Image
          source={localImage}
          resizeMethod="resize"
          resizeMode={resizeMode}
          style={[styles.imgStyle, extraImgStyle]}
        />
      );
    }
    return (
      <FastImage
        onError={onError}
        resizeMode={resizeMode}
        source={{uri: imgUrl}}
        style={[styles.imgStyle, extraImgStyle]}
      />
    );
  };

  return (
    <View
      style={[
        isSmallImg ? styles.smallCon : styles.bigCon,
        extraContainerStyle,
      ]}>
      {renderImage()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  smallCon: {
    width: vh(40),
    height: vh(40),
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: vh(40),
    justifyContent: 'center',
  },
  bigCon: {
    width: vh(100),
    height: vh(100),
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: vh(100),
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
