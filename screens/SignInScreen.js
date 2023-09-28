import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../components/Input'
import Button from '../components/Button'



const SignInScreen = () => {
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    const [isContraVisible, setContraVisible] = useState(false);


    const SignInPress = () => {
        console.warn("Registrarse");
    }

    const LogInPress = () => {
        console.warn("Login");
    }

    const ContraVisibility = () => {
        setContraVisible(!isContraVisible);
        console.warn("Se cambia el estado de la contraseña")
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.texto}>Login</Text>
                <CustomInput
                    placeholder="Correo electrónico"
                    value={correo}
                    setValue={setCorreo}
                    icononame="envelope"
                />

                <CustomInput
                    placeholder="Contraseña"
                    value={contra}
                    setValue={setContra}
                    secureTextEntry={!isContraVisible}
                    icononame="lock" 
                    iconpassword={isContraVisible ? 'eye' : 'eye-slash'}
                    onPress={ContraVisibility}/>
               
                <Button
                    text="Login"
                    onPress={LogInPress}
                    type="PRIMARY"
                    size={350}/>

                <Button
                    text=" ¿No tienes cuenta? Registrate"
                    onPress={SignInPress} type="TERTIARY" />

              
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'flex-start', //la sube
        padding: 20,
        height: '100%',
        marginTop: 150,
    },
    texto: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom:40,
    },
    texto3: {
        color: '#2C2B2D',
        fontSize: 16,
        marginBottom: 10,
        marginTop: 20,

    },

});

export default SignInScreen;