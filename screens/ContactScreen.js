import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const ContactosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.title}>Contactos</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={20} color="white" />
    </TouchableOpacity>
      <Text>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  contact: {
    backgroundColor: 'blue', 
    height: 80, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: width, 
  },
  title: {
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold', 
  },
  addButton: {
    backgroundColor: 'blue', 
    borderRadius: 25, 
    padding: 20, 
    marginRight: 16, 
    position: 'absolute', 
    bottom: 16, 
    right: 16, 
  },
});

export default ContactosScreen;

