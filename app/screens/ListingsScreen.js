import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const {
    request: loadListings,
    data: listings,
    error,
    loading,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title='Retry' onPress={loadListings}></AppButton>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing?.id?.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + '৳'}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
