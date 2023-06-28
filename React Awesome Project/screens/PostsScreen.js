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
import { StatusBar } from "expo-status-bar";
export default function PostsScreen() {
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
      padding: 20,
      paddingTop: 50,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
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
      flexDirection:'row',
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
    buttonCvadrats:{
        width:40,
        height:40
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
      </View>
      <View style={styles.sideBar}>
        <TouchableOpacity style={styles.buttonCvadrats}></TouchableOpacity>
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.crossInButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}
