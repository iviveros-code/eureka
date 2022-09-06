import React, {useState} from 'react';
import {SafeAreaView, Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setAsFavorite} from '@redux/photoSlice';

import {styles} from './styles';

export const Details = props => {
  const [favorite, setIsFavorite] = useState(false);
  const image = props.route.params.photo;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.row}>
        <TouchableOpacity onPress={goBack} style={styles.button}>
          <Text style={styles.textButton}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(setAsFavorite(image));
            setIsFavorite(!favorite);
            goBack();
          }}
          style={favorite ? styles.buttonSelected : styles.button}>
          <Text style={styles.textButton}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
