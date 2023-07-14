import React, { useRef, useState, useEffect } from "react";
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
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../Redux/slice";
export default function CreatePostScreen() {
  const [locationCoor, setLocationCoor] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [nameImg, setNameImg] = useState(null);
  const [locationName, setLocationName] = useState(null);

  const dispatch = useDispatch();
  const imagesData = useSelector((state) => state.images);
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
    mapStyle: {
      width: "90%",
      height: 100,
    },
  });

  const styless = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    photoView: {
      flex: 1,
      backgroundColor: "transparent",
      justifyContent: "flex-end",
    },

    flipContainer: {
      flex: 0.1,
      alignSelf: "flex-end",
    },

    button: { alignSelf: "center" },

    takePhotoOut: {
      borderWidth: 2,
      borderColor: "white",
      height: 50,

      width: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },

    takePhotoInner: {
      borderWidth: 2,
      borderColor: "white",
      height: 40,
      width: 40,
      backgroundColor: "white",
      borderRadius: 50,
    },
  });

  const imgStrelka = require("../images/arrow-left.png");
  const imgCamera = require("../images/camera.png");
  const imgNavigate = require("../images/map-pin.png");
  const imgDelete = require("../images/trash.png");
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const swipeBack = () => {
    navigation.navigate("Posts");
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log("click!");
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync();
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    return coords;
  };

  const handleCheckboxToggle = async () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    (async () => {
      setCameraRef(null);
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (capturedPhoto !== null) {
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
              <Image
                source={{ uri: capturedPhoto.uri }}
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
              ></Image>
            </View>
            <TextInput
              placeholder="Назва..."
              style={styles.inputImgPost}
              onChangeText={(text) => {
                setNameImg(text);
              }}
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
              {/* <Image
                style={{ width: 20, height: 20 }}
                source={imgNavigate}
              ></Image> */}
              {/* <Switch
                value={isChecked}
                onValueChange={() => {
                  handleCheckboxToggle();
                  if (isChecked) {
                    const coor = getLocation();
                    setLocationCoor(coor);
                  } else {
                    setLocationCoor(null);
                  }
                }}
              ></Switch> */}
              {/* {locationCoor && (
                <MapView
                  style={styles.mapStyle}
                  region={{
                    ...locationCoor,
                  }}
                  showsUserLocation={true}
                >
                  {locationCoor && (
                    <Marker
                      title="I am here"
                      coordinate={{ ...locationCoor }}
                      description="Hello"
                    />
                  )}
                </MapView>
              )} */}
            </View>
            <TouchableOpacity
              style={{
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                dispatch(
                  setImages({
                    uriName: capturedPhoto.uri,
                    name: nameImg,
                    location: locationCoor.coords,
                  })
                );
                console.log(imagesData);
                navigation.navigate("Posts");
                setCapturedPhoto(null);
                setNameImg(null);
                setLocationCoor(null);
              }}
            >
              <Text
                style={{ color: "#BDBDBD", fontSize: 16, fontWeight: "400" }}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
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
          >
            <TouchableOpacity
              onPress={() => {
                setCapturedPhoto(null);
                navigation.navigate("Profile");
              }}
            >
              <Image
                source={imgDelete}
                style={{ width: 28, height: 28 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View style={styless.container}>
      <Camera style={styless.camera} type={type} ref={setCameraRef}>
        <View style={styless.photoView}>
          <TouchableOpacity
            style={styless.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styless.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                const locationPhotos = await Location.getCurrentPositionAsync();
                console.log(locationPhotos)
                const photoMain = await MediaLibrary.createAssetAsync(uri);
                setLocationCoor(locationPhotos)
                setCapturedPhoto(photoMain);
                console.log(photoMain);
              }
            }}
          >
            <View style={styless.takePhotoOut}>
              <View style={styless.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
