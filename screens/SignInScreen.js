import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/Input';
import Button from '../components/Button';
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [correo, setCorreo] = useState('');
  const [contra, setContra] = useState('');
  const [isContraVisible, setContraVisible] = useState(false);
  const navigation = useNavigation();

  const LogInPress = async () => {
    try {
     
      const storedCorreo = await AsyncStorage.getItem('correo');
      const storedContra = await AsyncStorage.getItem('contra');

      if (correo === storedCorreo && contra === storedContra) {
        navigation.navigate("ContactosScreen");
      } else {
        Alert.alert(
          'Credenciales incorrectas',
          'Por favor, verifica tus credenciales e intenta de nuevo.'
        );
      }
    } catch (error) {
      console.error('Error al iniciar sesión: ', error);
    }
  };

  const ContraVisibility = () => {
    setContraVisible(!isContraVisible);
  };

  const RegistroPress = () =>{
    navigation.navigate("SignUpScreen");
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

        <Button 
        text="Login" 
        onPress={LogInPress} 
        type="PRIMARY" 
         />

        <Button text="¿No tienes cuenta? Registrate" onPress={RegistroPress} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    padding: 20,
    height: '100%',
    marginTop: 150,
  },
  texto: {
    textAlign:'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default SignInScreen;
