import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function CreatePostScreen() {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      width: "100%",
      height: 44,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 44,
      paddingLeft: 16,
      paddingRight: 16,
      borderBottomWidth: 0.5,
      borderBottomColor: "#BDBDBD",
    },
    strelka: {
      marginRight: 64,
    },
    form: {
      width: "100%",
      marginTop: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    photoTeren: {
      width: 343,
      height: 240,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: "#BDBDBD",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputImgPost: {
      width: "90%",
      paddingTop: 15,
      paddingBottom: 15,
      marginBottom: 16,
    },
  });
  const imgStrelka = require("../images/arrow-left.png");
  const imgCamera = require("../images/camera.png");
  const imgNavigate = require("../images/map-pin.png");
  const imgDelete = require('../images/trash.png')
  const navigation = useNavigation();
  const swipeBack = () => {
    navigation.navigate("Posts");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.strelka} onPress={swipeBack}>
            <Image
              style={{ width: 24, height: 24 }}
              source={imgStrelka}
            ></Image>
          </TouchableOpacity>
          <Text>Сворити публікацію</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.photoTeren}>
            <TouchableOpacity>
              <Image
                style={{ width: 24, height: 24 }}
                source={imgCamera}
              ></Image>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Завантажте фото"
            style={styles.inputImgPost}
          ></TextInput>
          <TextInput
            placeholder="Назва..."
            style={styles.inputImgPost}
          ></TextInput>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "90%",
              paddingTop: 15,
              paddingBottom: 15,
              marginBottom: 32,
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={imgNavigate}
            ></Image>
            <TextInput placeholder="Місцевість"></TextInput>
          </View>
          <TouchableOpacity
            style={{
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#BDBDBD", fontSize: 16, fontWeight: "400" }}>
              Опубліковати
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            bottom:0,
            left:0,
            display: "flex",
            width: "100%",
            height: 70,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity><Image source={imgDelete} style={{width:28,height:28}}></Image></TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
