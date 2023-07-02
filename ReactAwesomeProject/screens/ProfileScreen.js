import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  backProfile: {
    width: "100%",
    height: "100%",
  },
  containerWrapForScroll: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 25,
    marginTop: 147,
  },
  imgAvatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 32,
  },
  mainName: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  viewScrollContainer: {
width:'100%',
paddingVertical: 16,
  },
  contForPublication: {
     width: "100%",
      padding: 16,
       marginBottom: 32 
  },
  imgPublic:{
    width:'100%',
    height:240,
    borderRadius: 8
  }
});

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backProfile}
        source={{
          uri: "https://phonoteka.org/uploads/posts/2021-04/1618650113_20-phonoteka_org-p-zadnii-fon-gori-25.jpg",
        }}
      >
        <View style={styles.containerWrapForScroll}>
          <Image
            source={{
              uri: "https://www.studiorent.ru/upload_data/9964/upldQ74OZi.jpg",
            }}
            style={styles.imgAvatar}
          ></Image>
          <Text style={styles.mainName}>Natali Romanova</Text>
          <TouchableOpacity></TouchableOpacity>
          <ScrollView style={styles.viewScrollContainer}>
          <View style={styles.contForPublication}>
              <Image style={styles.imgPublic} source={require('../images/Rectangle23.png')}></Image>
              <View></View>
            </View>
            <View style={styles.contForPublication}>
              <Image style={styles.imgPublic} source={require('../images/Rectangle2.png')}></Image>
              <View></View>
            </View>
            <View style={styles.contForPublication}>
              <Image style={styles.imgPublic} source={require('../images/Rectangle4.png')}></Image>
              <View></View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
