import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';

const mostRatedPlaces = [
  {
    id: 1,
    name: 'Place 1',
    image: require('./assets/place1.jpg'),
    details: 'Details of Place 1...',
  },
  {
    id: 2,
    name: 'Place 2',
    image: require('./assets/place2.jpg'),
    details: 'Details of Place 2...',
  },
  
  // Add more places as needed
];



const trendingEvents = [
  {
    id: 1,
    name: 'Event 1',
    image: require('./assets/event1.jpg'),
    details: 'Details of Event 1...',
  },
  {
    id: 2,
    name: 'Event 2',
    image: require('./assets/event2.jpg'),
    details: 'Details of Event 2...',
  },

  // Add more events as needed
];

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Trending Events</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {trendingEvents.map((event) => (
          <TouchableOpacity key={event.id} onPress={() => handleItemPress(event)} style={styles.imageContainer}>
            <Image source={event.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.heading}>Most Rated Places</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mostRatedPlaces.map((place) => (
          <TouchableOpacity key={place.id} onPress={() => handleItemPress(place)} style={styles.imageContainer}>
            <Image source={place.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={selectedItem != null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedItem?.name}</Text>
            <Text style={styles.modalDetails}>{selectedItem?.details}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  imageContainer: {
    marginRight: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDetails: {
    fontSize: 16,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
