import styles from './styles';
import React, {useState} from 'react';
import AsyncImage from '../asyncImage';
import image from '@corporateFoods/utils/image';
import {vh} from '@corporateFoods/utils/dimensions';
import {colors} from '@corporateFoods/utils/colors';
import {FlatList, Keyboard, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  data?: any;
  dropText?: string;
  callback?: Function;
}

export default function DropBox(props: Props) {
  const {dropText, data, callback = () => {}} = props;
  const [selectedState, setSelectedState] = useState(-1);
  const [showDropDown, setShowDropDown] = useState(false);

  const renderItem = ({item, index}: any) => {
    const itemPressed = () => {
      setSelectedState(index);
      setShowDropDown(!showDropDown);
      {
        callback && callback(item);
      }
    };

    return (
      <TouchableOpacity
        style={styles.renderView}
        activeOpacity={0.9}
        onPress={itemPressed}
        key={index}>
        {item?.leftImage && <AsyncImage uri={item.leftImage} />}
        <Text style={styles.itemText}>{item.text}</Text>
        {item?.rightImage && <AsyncImage uri={item.rightImage} />}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <TouchableOpacity
        style={[
          styles.dropHead,
          showDropDown ? styles.selectCompanyContainer : {},
        ]}
        activeOpacity={0.9}
        onPress={() => {
          Keyboard.dismiss();
          setShowDropDown(!showDropDown);
        }}>
        <View style={styles.countrySelectorEmptyView} />
        <Text style={styles.headText}>
          {selectedState === -1 ? dropText : data[selectedState]?.text}
        </Text>
        <AsyncImage
          localImage={showDropDown ? image.dropUp : image.drop}
          extraContainerStyle={styles.dropImageContainer}
        />
      </TouchableOpacity>

      {showDropDown && (
        <FlatList
          data={data}
          bounces={false}
          scrollEnabled
          renderItem={renderItem}
          contentContainerStyle={[
            styles.listContainer,
            showDropDown ? {borderColor: colors.orange} : {},
          ]}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
}
