import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const restaurants = [
  {id: 1, name: 'Restaurant 1', layout: 'Layout 1'},
  {id: 2, name: 'Restaurant 2', layout: 'Layout 2'},
  {id: 3, name: 'Restaurant 3', layout: 'Layout 3'},
  // Add more restaurants as needed
];

const RestaurantsListScreen = ({navigation}) => {
  const handleRestaurantSelect = restaurant => {
    navigation.navigate('Restaurant', {restaurant});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restaurants List</Text>
      {restaurants.map(restaurant => (
        <TouchableOpacity
          key={restaurant.id}
          onPress={() => handleRestaurantSelect(restaurant)}
          style={styles.restaurantItem}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  restaurantItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default RestaurantsListScreen;
