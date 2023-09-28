import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../components/Input'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';



const AddContactScreen = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numero, setNumero] = useState(false);

    


    const AddContact = async () => { 
            try {
              // Obtener la lista actual de contactos almacenados en AsyncStorage
              const contactos = await AsyncStorage.getItem('contactos');
              let contactosArray = [];
        
              if (contactos) {
                contactosArray = JSON.parse(contactos);
              }
        
              // Agregar el nuevo contacto al arreglo
              contactosArray.push({ nombre, apellido, numero });
        
              // Guardar el arreglo actualizado en AsyncStorage
              await AsyncStorage.setItem('contactos', JSON.stringify(contactosArray));
        
              // Limpiar los campos de entrada después de agregar el contacto
              setNombre('');
              setApellido('');
              setNumero('');
              console.warn('Contacto agregado');
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
                    size={350} />


            </View>
        </ScrollView>
    )
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