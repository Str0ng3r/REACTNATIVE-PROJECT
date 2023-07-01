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
export default function CommentsScreen() {
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
  });
  const imgStrelka = require("../images/arrow-left.png");
  const navigation = useNavigation();
  const imgBigComm = require('../images/Rectangle23.png')
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
          <Text
            style={{
              color: "#212121",
              fontSize: 17,
              fontWeight: "500",
              lineHeight: 22,
              marginLeft: 100,
            }}
          >
            Коментарі
          </Text>
        </View>
<View style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
    <Text>hgfghgh</Text>
<Image style={{width:240,height:240,borderRadius:8}} source={imgBigComm}></Image>

</View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            width: "100%",
            height: 70,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
    </TouchableWithoutFeedback>
  );
}
