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
  const imgBigComm = require("../images/Rectangle23.png");
  const imgAvatar = require("../images/Ellipse.png");
  const imgAvatarW = require("../images/EllipseW.png");
  const imgSend = require('../images/Send.png')
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
        <View
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 340, height: 240, borderRadius: 8, marginTop: 32 }}
            source={imgBigComm}
          ></Image>

          <View style={{ width: "90%", height: 100, marginTop: 14 }}>
            <Image
              style={{ position: "absolute", top: 0, left: 0 }}
              source={imgAvatar}
            ></Image>
            <View
              style={{
                marginLeft: 24,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                width: 300,
                height: 100,
              }}
            >
              <Text
                style={{
                  color: "#212121",
                  fontSize: 13,
                  fontWeight: "400",
                  lineHeight: 18,
                }}
              >
                Really love your most recent photo. I`ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text
                style={{
                  color: "#212121",
                  fontSize: 10,
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  lineHeight: 18,
                }}
              >
                09 червня, 2020 | 08:40
              </Text>
            </View>

            <View style={{ width: "100%", height: 100, marginTop: 14 }}>
              <Image
                style={{ position: "absolute", top: 0, right: 0 }}
                source={imgAvatarW}
              ></Image>
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: 300,
                  height: 100,
                }}
              >
                <Text
                  style={{
                    color: "#212121",
                    fontSize: 13,
                    fontWeight: "400",
                    lineHeight: 18,
                  }}
                >
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text
                  style={{
                    color: "#212121",
                    fontSize: 10,
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    lineHeight: 18,
                  }}
                >
                  09 червня, 2020 | 09:14
                </Text>
              </View>
            </View>
            <View style={{ width: "90%", height: 100, marginTop: 14 }}>
              <Image
                style={{ position: "absolute", top: 0, left: 0 }}
                source={imgAvatar}
              ></Image>
              <View
                style={{
                  marginLeft: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: 10,
                  width: 300,
                  height: 100,
                }}
              >
                <Text
                  style={{
                    color: "#212121",
                    fontSize: 13,
                    fontWeight: "400",
                    lineHeight: 18,
                  }}
                >
                  Thank you! That was very helpful!
                </Text>
                <Text
                  style={{
                    color: "#212121",
                    fontSize: 10,
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    lineHeight: 18,
                  }}
                >
                  09 червня, 2020 | 09:20
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%",padding:16, }}
        >

          <View style={{width:'100%',paddingLeft:16,paddingRight:16,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
<TextInput placeholder="Коментувати..." style={{height:50,display:'flex',alignItems:'center',justifyContent:'center'}}></TextInput>
<TouchableOpacity style={{width:34,height:34,position:'absolute',right:0}}><Image source={imgSend}></Image></TouchableOpacity>
</View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
