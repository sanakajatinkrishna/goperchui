import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const parkingSlots = [
  {id: 1, name: 'Parking Slot 1'},
  {id: 2, name: 'Parking Slot 2'},
  {id: 3, name: 'Parking Slot 3'},
  // Add more parking slots as needed
];

const ParkingListScreen = ({navigation}) => {
  const handleParkingSlotSelect = parkingSlot => {
    navigation.navigate('Parking', {parkingSlot});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Parking Slots List</Text>
      {parkingSlots.map(parkingSlot => (
        <TouchableOpacity
          key={parkingSlot.id}
          onPress={() => handleParkingSlotSelect(parkingSlot)}
          style={styles.parkingSlotItem}>
          <Text style={styles.parkingSlotName}>{parkingSlot.name}</Text>
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
  parkingSlotItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  parkingSlotName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default ParkingListScreen;
