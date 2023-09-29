import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

const ContactosScreen = () => {
  const [contactos, setContactos] = useState([]);
  const navigation = useNavigation();

  // Lógica de carga de datos en useEffect
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

    // Cargar datos al montar la pantalla o cada vez que se actualice
    cargarContactos();
  }, []); // El arreglo vacío [] asegura que esto solo se ejecute al montar la pantalla

  const Add = () => {
    console.warn("Agregar");
    navigation.navigate("AddContactScreen");
  }

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
