import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
    height: 200
  },
  image: {
    width: Dimensions.get("window").width / 2,
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover"
  }
});