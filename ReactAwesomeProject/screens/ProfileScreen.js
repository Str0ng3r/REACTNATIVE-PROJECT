import { useNavigation } from "@react-navigation/native";
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
    paddingTop:60
  },
  imgAvatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
position:'absolute',
top:-60
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

  },
  contForPublication: {
     width: "100%",
      padding: 16,
       marginBottom: 40
  },
   contForPublicationIndividual: {
    width: "100%",
     padding: 16,
      marginBottom: 200
 },
  imgPublic:{
    width:'100%',
    height:240,
    borderRadius: 8
  },
  textUnderImg:{
    color: '#212121',
fontSize: 16,
fontFamily: 'Roboto',
fontWeight: '500',
marginTop:8
  },
  boxComments:{
    marginTop:8,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  iconComm:{
   marginRight:6
  },
  iconLike:{
    marginLeft:24
  }, 
   iconLocation:{
    marginLeft:120,
    marginRight:4
  },
  nameLocation:{
    // Ukraine
color: '#212121',
fontSize: 16,
fontFamily: 'Roboto',
fontWeight: '400',
  },
  cyfry:{
    color: '#212121',
fontSize: 16,
fontFamily: 'Roboto',
fontWeight: '400',
  },
  buttonLogOut:{
    position:'absolute',
    right:16,
    top:22
  }
});

const comm = require('../images/COMM.png')
const location = require('../images/LOCATION.png')
const like = require('../images/LIKE.png')
const logOut = require('../images/log-out.png')


export default function ProfileScreen() {
  const navigation = useNavigation()
  const swipeBack = () => {
    navigation.navigate("Posts");
  };
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
          <TouchableOpacity style={styles.buttonLogOut} onPress={swipeBack}><Image source={logOut}></Image></TouchableOpacity>
          <ScrollView style={styles.viewScrollContainer}>
          <View style={styles.contForPublication}>
              <Image style={styles.imgPublic} source={require('../images/Rectangle23.png')}></Image>
              <Text style={styles.textUnderImg}>Захід на чорному морі</Text>
              <View style={styles.boxComments}><Image source={comm} style={styles.iconComm}></Image><Text style={styles.cyfry}>8</Text><Image source={like} style={styles.iconLike}></Image><Text style={styles.cyfry}>153</Text><Image source={location} style={styles.iconLocation}></Image><Text style={styles.nameLocation}>Ukraine</Text></View>
            </View>
            <View style={styles.contForPublication}>
              <Image style={styles.imgPublic} source={require('../images/Rectangle2.png')}></Image>
              <Text style={styles.textUnderImg}>Старий будиночок у Венеції</Text>
              <View style={styles.boxComments}><Image source={comm} style={styles.iconComm}></Image><Text style={styles.cyfry}>3</Text><Image source={like} style={styles.iconLike}></Image><Text style={styles.cyfry}>200</Text><Image source={location} style={styles.iconLocation}></Image><Text style={styles.nameLocation}>Italy</Text></View>
            </View>
            <View style={styles.contForPublicationIndividual}>
              <Image style={styles.imgPublic} source={require('../images/Rectangle4.png')}></Image>
              <Text style={styles.textUnderImg}>Ліс</Text>
              <View style={styles.boxComments}><Image source={comm} style={styles.iconComm}></Image><Text style={styles.cyfry}>50</Text><Image source={like} style={styles.iconLike}></Image><Text style={styles.cyfry}>200</Text><Image source={location} style={styles.iconLocation}></Image><Text style={styles.nameLocation}>Ukraine</Text></View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}