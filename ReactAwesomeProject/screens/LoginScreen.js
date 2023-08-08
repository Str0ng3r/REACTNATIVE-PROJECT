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
import { useNavigation } from '@react-navigation/native';
import { setIsAuth } from '../Redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../Redux/authoperations';

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigatation = useNavigation()
  const [passwordVal, setPasswordVal] = useState('');
  const [email,setEmail] = useState('')
  const dispatch = useDispatch()
  const authData = useSelector(state => state.auth)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const linkFunc = () => {
    navigatation.navigate('Registration')
  };
  const linkLogin = () => {
    dispatch(setIsAuth(true))
    console.log(authData)
  }
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
      marginBottom: 33,
      marginTop: 32,
      fontSize: 30,
    },
    whiteBox: {
      backgroundColor: '#FFFFFF',
      height: '60%',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
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
    inputRegistr: {
      backgroundColor: '#F6F6F6',
      borderRadius: 8,
      height: 50,
      marginTop: 10,
      padding: 10,
      marginBottom: 16,
      width: '100%',
      borderWidth: 1,
      borderColor: '#E8E8E8',
    },
    blueButton: {
      color: '#1B4371',
      fontSize: 16,
      lineHeight: 19,
    },
    inputWithButton: {
      width: '70%',
      zIndex: 99,
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
      borderWidth: 1,
      borderColor: '#E8E8E8',
    },
  });
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
          <Text style={styles.textRegistred}>Увійти</Text>



          <TextInput
            placeholder="Адреса електронної пошти"
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
              style={styles.inputWithButton}
            ></TextInput>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text style={styles.blueButton}>
                {passwordVisible ? 'Сховати' : 'Показати'}
              </Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={styles.buttonRegistr} onPress={()=> {signInUser(email,passwordVal,dispatch)}}>
            <Text style={styles.whiteColor}>Увійти</Text>
          </TouchableOpacity>



          <Text onPress={linkFunc} style={styles.linkColor}>
            Немає аккаунту? Зареєструватися
          </Text>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}
