import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
export default function RegistrationScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email,setEmail] = useState(null)
  const [login,setLogin] = useState(null)
  const [passwordVal, setPasswordVal] = useState('');
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },
    contBack: {
      flex: 1,
    },
    textRegistred: {
      color: '#212121',
      marginBottom: 20,
      marginTop: 60,
      fontSize: 30,
    },
    whiteBox: {
      backgroundColor: '#FFFFFF',
      height: '70%',
      position: 'absolute',
      bottom: 0,
      width: '100%', // Добавленное свойство
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
    },
    inputRegistr: {
      backgroundColor: '#F6F6F6',
      borderRadius: 8,
      height: 50,
      marginTop: 10,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    avatarBox: {
      backgroundColor: '#F6F6F6',
      borderRadius: 16,
      width: 120,
      height: 120,
      position: 'absolute',
      top: -60,
    },
    buttonPlus: {
      position: 'absolute',
      bottom: 0,
      right: -10,
    },
    buttonText: {
      paddingLeft: 8,
      paddingRight: 8,
      fontSize: 20,
      color: '#FF6C00',
      borderStyle: 'solid',
      borderColor: '#FF6C00',
      borderWidth: 1,
      borderRadius: 60,
    },
    buttonRegistr: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF6C00',
      padding: 16,
      width: '100%',
      borderRadius: 100,
      marginTop: 43,
    },
    whiteColor: {
      color: '#FFFFFF',
    },
    linkColor: {
      color: '#1B4371',
      fontSize: 16,
      marginTop: 16,
    },
    contPassword: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: '#F6F6F6',
      borderRadius: 8,
      height: 50,
      marginTop: 10,
      padding: 10,
      marginBottom: 10,
    },
  });
  const registrFunction = async () => {
    try {
      await AsyncStorage.setItem('password', passwordVal);
      console.log('Значение сохранено.');
    } catch (error) {
      console.log('Ошибка при сохранении значения:', error);
    }
  
  }
  const linkFunc = () => {
    navigation.navigate('Login')
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.contBack}
        source={{
          uri: 'https://phonoteka.org/uploads/posts/2021-04/1618650113_20-phonoteka_org-p-zadnii-fon-gori-25.jpg',
        }}
      >
        <View style={styles.whiteBox}>
          <View style={styles.avatarBox}>
            <TouchableOpacity style={styles.buttonPlus}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textRegistred}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            style={styles.inputRegistr}
            onChange={(evt) => {
              setLogin(evt.target.value)
            }}
          ></TextInput>

          <TextInput
            placeholder="Адреса електорнної пошти"
            placeholderTextColor="#BDBDBD"
            style={styles.inputRegistr}
            onChange={(evt) => {
              setEmail(evt.target.value)
            }}
          ></TextInput>
          <View style={styles.contPassword}>
            <TextInput
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={!passwordVisible}
              value={passwordVal}
              onChange={evt => {
                setPasswordVal(evt.target.value);
              }}
            ></TextInput>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text>{passwordVisible ? 'Скрыть' : 'Показать'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonRegistr} onPress={() => {
          navigation.navigate('Login')
        }}>
            <Text style={styles.whiteColor}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text onPress={linkFunc} style={styles.linkColor}>
            Вже є аккаунт? Увійти
          </Text>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}
