import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
import * as ImagePicker from 'react-native-image-picker';

import {addPhoto} from '@redux/photoSlice';
import {NAVIGATION} from '@constants';
import {styles} from './styles';

export const Home = () => {
  const [image, setImage] = useState('https://picsum.photos/200/300');
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photoRedux.photos);
  const navigation = useNavigation();

  const selectImage = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled image picker');
      } else if (response.errorCode) {
        alert('ImagePicker Error: ', response.errorCodeMessage);
      } else {
        const path = response.assets[0].uri;
        setImage(path);
        dispatch(addPhoto(path));
      }
    });
  };

  const takePhoto = async () => {
    const options = {
      title: 'Take Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true,
      saveToPhotos: true,
    };

    await ImagePicker.launchCamera(options, response => {
      if (response.errorCode) {
        alert('ImagePicker Error: ', response.errorMessage);
      } else if (response.didCancel) {
        alert('user cancelled image picker');
      } else {
        const path = response.assets[0].uri;
        setImage(path);
        dispatch(addPhoto(path));
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.galleryContainer}>
        <TouchableOpacity
          onPress={selectImage}
          style={[styles.button, styles.gallery]}>
          <Text style={styles.textButton}>Select an Image </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerEmptyState}>
        <Text style={styles.emptyText}>
          {photos.length <= 0
            ? 'Please select a photo from your \n library or take a new one'
            : null}
        </Text>
      </View>

      <View style={styles.containerCards}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {photos &&
            photos.map((photo, index) => (
              <View key={index} style={styles.containerPhoto}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(NAVIGATION.HOME.DETAILS, {photo})
                  }>
                  <FastImage
                    key={index}
                    style={styles.photos}
                    source={{uri: photo ? photo : image}}
                  />
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takePhoto} style={styles.button}>
          <Text style={styles.textButton}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
