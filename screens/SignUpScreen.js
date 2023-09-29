import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/Input';
import Button from '../components/Button';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [nombre, setNombre] = useState('');
  const [contra2, setContra2] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [isContraVisible, setContraVisible] = useState(false);
  const navigation = useNavigation();

  const RegistroPress = async () => {
    try {
      // Verifica si el usuario ha aceptado los términos y condiciones
      if (!aceptaTerminos) {
        console.warn('Debes aceptar los términos y condiciones');
        return;
      }

      // Aquí puedes realizar la validación de los campos antes de guardar las credenciales

      // Guarda las credenciales en AsyncStorage
      await AsyncStorage.setItem('correo', correo);
      await AsyncStorage.setItem('contra', contra);

      // Muestra un mensaje de registro exitoso
      console.warn('Registro exitoso');
      navigation.navigate("SignInScreen"); // "AlbumDetail" es el nombre de la pantalla de detalles
      // Aquí puedes navegar a la pantalla de inicio de sesión (SignInScreen) o realizar alguna otra acción.
    } catch (error) {
      console.error('Error al registrarse: ', error);
    }

  };

  const ContraVisibility = () => {
    setContraVisible(!isContraVisible);
    console.warn('Se cambia el estado de la contraseña');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.texto}>Registrarse</Text>

        <CustomInput
          placeholder="Ingresa tu Nombre"
          value={nombre}
          setValue={setNombre}
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
          onPress={ContraVisibility}
        />

        <CustomInput
          placeholder="Repetir Contraseña"
          value={contra2}
          setValue={setContra2}
          secureTextEntry={!isContraVisible}
          iconpassword={isContraVisible ? 'eye' : 'eye-slash'}
          onPress={ContraVisibility}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
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
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
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

   
