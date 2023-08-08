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
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Svg, Circle, Rect, Line } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { setIsAuth } from "../Redux/slice";
import { logOut } from "../Redux/authoperations";
export default function PostsScreen() {
  const dispatch = useDispatch();
  const dataAuth = useSelector((state) => state.auth);
  const imagesData = useSelector((state) => state.images);

  const linkUnLogin = () => {
    dispatch(setIsAuth(false));
    console.log(dataAuth);
  };

  useEffect(() => {}, [imagesData]);
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
      position: "relative",
      padding: 20,
      paddingTop: 50,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      backdropFilter: "blur(27.18px)",
      background: "white",
      boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.30)",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 32,
      paddingBottom: 32,
      height: "100%",
      width: "100%",
    },
    boxForImg: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    contWrapForText: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 4,
    },
    nameSurname: {
      color: "#212121",
      fontSize: 13,
      fontFamily: "Roboto",
      fontWeight: "700",
    },
    emailText: {
      color: "rgba(33, 33, 33, 0.80)",
      fontSize: 11,
      fontFamily: "Roboto",
      fontWeight: "400",
    },
    sideBar: {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      paddingTop: 9,
      paddingBottom: 34,
      width: "100%",
      height: 100,
      bottom: 0,
    },
    mainText: {
      fontSize: 17,
      color: "#212121",
      paddingLeft: 100,
    },
    crossInButton: {
      color: "#ffffff",
      fontSize: 24,
    },
    mainButton: {
      backgroundColor: "#FF6C00",
      borderRadius: 20,
      width: 70,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonCvadrats: {
      width: 40,
      height: 40,
    },
    mainKvadrat: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    postCont: {
      width: "100%",
      height: 300,
      display: "flex",
      flexDirection: "column",
      marginTop: 20,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    wrapBottomTabImg: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width:'100%'
    },
    mapStyle: {
      width: "90%",
      height: 100,
    },
  });
  const comm = require("../images/COMM.png");
  const location = require("../images/LOCATION.png");
  const like = require("../images/LIKE.png");
  const navigation = useNavigation();
  const imgLogOut = require("../images/log-out.png");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={logOut(dispatch)}>
            <Image source={imgLogOut} style={{ width: 24, height: 24 }}></Image>
          </TouchableOpacity>

          <Text style={styles.mainText}>Публікації</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.boxForImg}>
            <Image
              source={{
                uri: "https://www.studiorent.ru/upload_data/9964/upldQ74OZi.jpg",
              }}
              style={{ width: 60, borderRadius: 16, height: 60 }}
            />
            <View style={styles.contWrapForText}>
              <Text style={styles.nameSurname}>Natali Romanova</Text>
              <Text style={styles.emailText}>email@example.com</Text>
            </View>
          </View>
          <FlatList
            style={{
              width: "100%",
              height: "100%",
              marginTop: 50,
              marginBottom: 60,
            }}
            data={imagesData}
            keyExtractor={(item) => item.uriName}
            renderItem={({ item }) => (
              <View style={styles.postCont}>
                <Image
                  source={{ uri: item.uriName }}
                  style={{ width: "100%", height: 240, borderRadius: 8 }}
                />
                <View style={styles.wrapBottomTabImg}>
                  {item.location !== null && (
                    <TouchableOpacity style={{ width: 24, height: 24 }} onPress={()=> { 
      const locatForMap = {
        latitude:item.location.coords.latitude,
        longitude:item.location.coords.longitude
      }
      navigation.navigate('MapScreen',{data:locatForMap})
    }

      }>
                    <Image
                      source={location}
                      style={{ width: 24, height: 24 }}
                    ></Image>
                    </TouchableOpacity>
                  )}
                  <Text style={{marginLeft:10}}>{item.name}</Text>
                  <Image source={like} style={{width:24,height:24,marginLeft:20}}></Image>
                  <TouchableOpacity style={{width:24,height:24,marginLeft:20}} onPress={()=> {navigation.navigate('Comments')}}><Image source={comm} ></Image></TouchableOpacity>
                  
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
