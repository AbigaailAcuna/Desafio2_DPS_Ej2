import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const ContactosScreen = () => {
  const [contactos, setContactos] = useState([]);

  const Add = () => {
    console.warn("Agregar");
}

  // Cargar los contactos desde AsyncStorage al cargar la pantalla
  useEffect(() => {
    const cargarContactos = async () => {
      try {
        const contactosGuardados = await AsyncStorage.getItem('contactos');
        if (contactosGuardados) {
          const contactosArray = JSON.parse(contactosGuardados);
          setContactos(contactosArray);
        }
      } catch (error) {
        console.error('Error al cargar contactos: ', error);
      }
    };

    cargarContactos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.title}>Contactos</Text>
      </View>
      <ScrollView style={styles.contactList}>
        {contactos.map((contacto, index) => (
          <View key={index} style={styles.contactItem}>
            <Text>{contacto.nombre} {contacto.apellido}</Text>
            <Text>{contacto.numero}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={Add}>
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
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
  contactList: {
    padding: 16,
  },
  contactItem: {
    backgroundColor: 'white', 
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderBottomColor: 'blue', 
    borderBottomWidth: 1, 
  },
});

export default ContactosScreen;


