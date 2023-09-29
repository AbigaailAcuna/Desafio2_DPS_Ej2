import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from "@react-navigation/native";

const { width } = Dimensions.get('window');

const ContactosScreen = () => {
  const [contactos, setContactos] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 

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
  }, [isFocused]);

  const Add = () => {
    navigation.navigate("AddContactScreen");
  }

  const eliminarContacto = async (contacto) => {
    try {
      const nuevosContactos = contactos.filter((c) => c !== contacto);
      await AsyncStorage.setItem('contactos', JSON.stringify(nuevosContactos));
      setContactos(nuevosContactos);
    } catch (error) {
      console.error('Error al eliminar el contacto: ', error);
    }
  };

  const confirmarEliminarContacto = (contacto) => {
    Alert.alert(
      'Eliminar contacto',
      '¿Estás seguro de que deseas eliminar este contacto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => eliminarContacto(contacto),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.title}>Contactos</Text>
      </View>
      {contactos.length === 0 ? (
        <View style={styles.noContactTextContainer}>
          <Text style={styles.noContactText}>No hay contactos agregados</Text>
        </View>
      ) : (
        <ScrollView style={styles.contactList}>
          {contactos.map((contacto, index) => (
            <View key={index} style={styles.contactItem}>
              <View style={styles.contactInfo}>
                <Text>{contacto.nombre} {contacto.apellido}</Text>
                <Text>{contacto.numero}</Text>
              </View>
              <TouchableOpacity
                onPress={() => confirmarEliminarContacto(contacto)}
                style={styles.deleteButton}
              >
                <Icon name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
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
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  contactInfo: {
    flex: 1, 
  },
  deleteButton: {
    marginLeft: 16, 
  },
  noContactTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  noContactText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default ContactosScreen;
