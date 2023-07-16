import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen() {
  const imgStrelka = require("../images/arrow-left.png");
  const route = useRoute();
  const navigation = useNavigation()
  const swipeBack = () => {
    navigation.navigate("Posts");
  };
  const { data } = route.params;

  if(!data){
    return ( <View><Text>Sorry</Text></View>)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.strelka} onPress={swipeBack}>
        <Image style={{ width: 24, height: 24 }} source={imgStrelka}></Image>
      </TouchableOpacity>
      <MapView style={{ width: "100%", height: "100%" }} initialRegion={data}>
        <Marker coordinate={data}></Marker>
      </MapView>
    </View>
  );
}

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
    width: "100%",
  },
  mapStyle: {
    width: "90%",
    height: 100,
  },
});
