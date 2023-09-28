import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../components/Input'
import Button from '../components/Button'



const AddContactScreen = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numero, setnNumero] = useState(false);


    const AddContact = () => {
        console.warn("agregado");
    }

   

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
                    setValue={setnNumero}

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