import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import CustomInput from '../components/Input'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const AddContactScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const navigation = useNavigation();

  const loadContactos = async () => {
    try {
      const storedContactos = await AsyncStorage.getItem('contactos');
      if (storedContactos) {
        const parsedContactos = JSON.parse(storedContactos);
        return parsedContactos;
      }
    } catch (error) {
      console.error('Error al cargar los contactos: ', error);
    }
    return [];
  };

  const AddContact = async () => { 
    try {
     
      const nuevoContacto = { nombre, apellido, numero };
      const contactosArray = await loadContactos();
      contactosArray.push(nuevoContacto);

     
      await AsyncStorage.setItem('contactos', JSON.stringify(contactosArray));

    
      setNombre('');
      setApellido('');
      setNumero('');

      console.warn('Contacto agregado');
      
      
      const updatedContactos = await loadContactos();
      navigation.navigate("ContactSplash", { contactos: updatedContactos });
    } catch (error) {
      console.error('Error al agregar el contacto: ', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.texto}>Agregar Contacto</Text>
        <CustomInput
          placeholder="Ingrese nombre"
          value={nombre}
          setValue={setNombre}
        />

        <CustomInput
          placeholder="Ingrese apellido"
          value={apellido}
          setValue={setApellido}
        />
        <CustomInput
          placeholder="Ingrese número de teléfono"
          value={numero}
          setValue={setNumero}
        />
        <Button
          text="Agregar Contacto"
          onPress={AddContact}
          type="PRIMARY"
          size={350}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 20,
    height: '100%',
    marginTop: 150,
  },
  texto: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default AddContactScreen;
