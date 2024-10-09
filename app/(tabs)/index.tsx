import { Image, StyleSheet, Platform } from "react-native";
import WebView from "react-native-webview";
import Constants from "expo-constants";

export default function HomeScreen() {
  return (
    <WebView
      style={styles.view}
      source={{
        uri: "https://www.google.com",
      }}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    height: 800,
    width: "100%",
    borderRadius: 8,
  },
});
