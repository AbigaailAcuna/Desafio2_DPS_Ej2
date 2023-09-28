// SignInScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/Input';
import Button from '../components/Button';

const SignInScreen = () => {
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [isContraVisible, setContraVisible] = useState(false);

  const LogInPress = async () => {
    try {
      // Obtener las credenciales almacenadas
      const storedCorreo = await AsyncStorage.getItem('correo');
      const storedContra = await AsyncStorage.getItem('contra');

      // Verificar las credenciales ingresadas
      if (correo === storedCorreo && contra === storedContra) {
        // Las credenciales son correctas, permitir el acceso a la aplicación
        console.warn('Inicio de sesión exitoso');
        // Aquí puedes navegar a la pantalla principal de tu aplicación
      } else {
        // Las credenciales son incorrectas, mostrar un mensaje de error
        console.warn('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión: ', error);
    }
  };

  const ContraVisibility = () => {
    setContraVisible(!isContraVisible);
    console.warn('Se cambia el estado de la contraseña');
  };

  const RegistroPress = () =>{
    console.warn("registro");
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
          onPress={ContraVisibility}
        />

        <Button text="Login" onPress={LogInPress} type="PRIMARY" size={350} />

        <Button text="¿No tienes cuenta? Registrate" onPress={RegistroPress} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

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

export default SignInScreen;
