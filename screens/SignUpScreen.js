import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../components/Input'
import Button from '../components/Button'
import CheckBox from '@react-native-community/checkbox';



const Login = () => {
    {/*capturando valores*/ }
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    const [nombre, setnombre] = useState('');
    const [contra2, setContra2] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const [isContraVisible, setContraVisible] = useState(false);


    {/*eventos botones */ }
    const RegistroPress = () => {
        console.warn("hola");
    }

    const SingInPress = () => {
        console.warn("hola");
    }

    const ContraVisibility = () => {
        setContraVisible(!isContraVisible);
        console.warn("Se cambia el estado de la contraseña")
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.texto}>Registrarse</Text>

                <CustomInput
                    placeholder="Ingresa tu Nombre"
                    value={nombre}
                    setValue={setnombre}

                />
                <CustomInput
                    placeholder="Ingresa tu correo electrónico"
                    value={correo}
                    setValue={setCorreo}

                />
                <CustomInput
                    placeholder="Contraseña"
                    value={contra}
                    setValue={setContra}
                    secureTextEntry={!isContraVisible}
                    iconpassword={isContraVisible ? 'eye' : 'eye-slash'}
                    onPress={ContraVisibility} />

                <CustomInput
                    placeholder="Repetir Contraseña"
                    value={contra2}
                    setValue={setContra2}
                    secureTextEntry={!isContraVisible}
                    iconpassword={isContraVisible ? 'eye' : 'eye-slash'}
                    onPress={ContraVisibility} />

                <View style={{ flexDirection: 'row', alignItems: 'center' , marginTop:30}}>
                    <CheckBox
                        value={aceptaTerminos}
                        onValueChange={(newValue) => setAceptaTerminos(newValue)}
                    />
                    <Text style={{ marginLeft: 8 }}>
                        Acepto los <Text style={{ color: 'blue' }}>términos y condiciones</Text>
                    </Text>
                </View>
                <Button
                    text="Registrarse"
                    onPress={RegistroPress}
                    type="PRIMARY"
                    size={350} />


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'flex-start', //la sube
        padding: 20,
        height: '100%',
        marginTop: 25,
    },
    texto: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40
    },


});

export default Login;