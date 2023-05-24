import { Dimensions, Keyboard, ScrollView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { Course } from "./src/Course";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Course />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    width: Dimensions.get("window").width,
  },
});
