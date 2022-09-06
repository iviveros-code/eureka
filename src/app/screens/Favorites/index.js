import React from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';

import {useSelector} from 'react-redux';

import {styles} from './styles';

export const Favorites = () => {
  const favorites = useSelector(state => state.photoRedux.favoritePhotos);

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.containerEmptyState}>
          <Text style={styles.emptyText}>You dont have favorites yet</Text>
        </View>
      ) : null}

      <View style={{alignSelf: 'center'}}>
        <View style={{alignSelf: 'center'}}>
          <ScrollView contentContainerStyle={styles.scroll}>
            {favorites &&
              favorites.map((favorite, index) => {
                return (
                  <Image
                    key={index}
                    source={{uri: favorite}}
                    style={styles.image}
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
