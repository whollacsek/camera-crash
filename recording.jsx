import {
  Camera, CameraType,
  PermissionStatus,
} from "expo-camera";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function Recording() {
  const [cameraPermission, setCameraPermission] = useState(
    PermissionStatus.UNDETERMINED
  );

  const getPermission = async () => {
    const response =
      await Camera.requestCameraPermissionsAsync();
    setCameraPermission(response.status);
  };

  useEffect(() => {
    getPermission();
  }, []);

  if (cameraPermission === PermissionStatus.UNDETERMINED) {
    return <Text>Requesting camera permission</Text>;
  } else if (cameraPermission === PermissionStatus.GRANTED) {
    return <Camera type={CameraType.front} style={{width: '100%', height: '100%'}}/>;
  } else {
    return <Text>No access to camera</Text>;
  }
}
