import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
} from 'react-native';

const tables = [
  {id: 1, type: 'circle', seats: ['A', 'B', 'C', 'D']},
  {id: 2, type: 'rectangle', seats: ['1', '2', '3', '4', '5']},
  {id: 3, type: 'circle', seats: ['X', 'Y', 'Z']},
  {id: 4, type: 'rectangle', seats: ['6', '7', '8']},
];

const RestaurantScreen = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [bookedTables, setBookedTables] = useState([]);

  const handleTableSelect = table => {
    setSelectedTable(table);
  };

  const handleTableBook = () => {
    if (selectedTable) {
      if (bookedTables.includes(selectedTable)) {
        Alert.alert(
          'Table Already Booked',
          `Table ${selectedTable.id} is already booked. Please select another table.`,
        );
      } else {
        setBookedTables([...bookedTables, selectedTable]);
        setSelectedTable(null);
        Alert.alert(
          'Table Booked',
          `Table ${selectedTable.id} has been booked successfully!`,
        );
      }
    } else {
      Alert.alert('No Table Selected', 'Please select a table to book.');
    }
  };

  const isTableBooked = table => {
    return bookedTables.includes(table);
  };

  const renderTable = table => {
    const {id, type, seats} = table;
    const isBooked = isTableBooked(table);

    return (
      <TouchableOpacity
        key={id}
        onPress={() => handleTableSelect(table)}
        style={[
          styles.table,
          isBooked && styles.bookedTable,
          selectedTable === table && styles.selectedTable,
        ]}>
        <Text style={styles.tableText}>{id}</Text>
        <View style={styles.seatsContainer}>
          {seats.map(seat => (
            <View
              key={seat}
              style={[styles.seat, isBooked && styles.bookedSeat]}>
              <Text style={styles.seatText}>{seat}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('./assets/restaurant-background.jpg')}
      style={styles.container}>
      <View style={styles.receptionContainer}>
        <Text style={styles.receptionText}>Reception Area</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tablesContainer}>
          {tables.map(table => renderTable(table))}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleTableBook} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Table</Text>
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
  receptionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    marginBottom: 16,
  },
  receptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tablesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  table: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  seatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  seat: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  seatText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  bookedTable: {
    opacity: 0.5,
  },
  selectedTable: {
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  bookedSeat: {
    backgroundColor: '#FF0000',
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

export default RestaurantScreen;
