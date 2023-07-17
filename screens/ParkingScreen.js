import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';

const slots = [
  {id: 1, isBooked: false},
  {id: 2, isBooked: false},
  {id: 3, isBooked: false},
  {id: 4, isBooked: false},
  {id: 5, isBooked: false},
];

const ParkingScreen = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  const handleSlotSelect = slot => {
    setSelectedSlot(slot);
  };

  const handleSlotBook = () => {
    if (selectedSlot) {
      if (bookedSlots.includes(selectedSlot)) {
        Alert.alert(
          'Slot Already Booked',
          `Slot ${selectedSlot.id} is already booked. Please select another slot.`,
        );
      } else {
        setBookedSlots([...bookedSlots, selectedSlot]);
        setSelectedSlot(null);
        Alert.alert(
          'Slot Booked',
          `Slot ${selectedSlot.id} has been booked successfully!`,
        );
      }
    } else {
      Alert.alert('No Slot Selected', 'Please select a slot to book.');
    }
  };

  const isSlotBooked = slot => {
    return bookedSlots.includes(slot);
  };

  const renderSlot = slot => {
    const isBooked = isSlotBooked(slot);

    return (
      <TouchableOpacity
        key={slot.id}
        onPress={() => handleSlotSelect(slot)}
        style={[
          styles.slot,
          isBooked && styles.bookedSlot,
          selectedSlot === slot && styles.selectedSlot,
        ]}>
        <Text style={styles.slotText}>{slot.id}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('./assets/parking-background.jpg')}
      style={styles.container}>
      <View style={styles.slotsContainer}>
        {slots.map(slot => renderSlot(slot))}
      </View>
      <TouchableOpacity onPress={handleSlotBook} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Slot</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  slot: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  bookedSlot: {
    opacity: 0.5,
  },
  selectedSlot: {
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  bookButton: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ParkingScreen;
