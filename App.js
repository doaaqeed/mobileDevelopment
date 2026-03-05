import { StyleSheet, SafeAreaView } from 'react-native';

// You can import supported modules from npm
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <WebView
        source={{ uri: "https://www.google.com" }}
        style={styles.screen}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 screen: {
    flex: 1,
  },
});
