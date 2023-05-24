import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 32,
    flex: 1,
    gap: 42
  },
  header: {
    paddingVertical: 16,
    alignItems: "center"
  },
  headerTitle: {
    alignItems: "center",
    fontSize: 32,
    color: "#fff"
  },
  description: {
    gap: 8
  },
  descriptionText: {
    color: "#fff",
    textAlign: "justify",
    fontSize: 18
  },
  list: {
    flex: 1,
    width: "100%",
    height: 300,
    gap: 16,
    paddingBottom: 32
  },
  listTitle: {
    fontSize: 28,
    color: "#fff",
    borderColor: "#fff",
    width: "100%",
    borderBottomWidth: 1,
    textAlign: "center"
  },
  listContent: {
    backgroundColor: "#444",
    padding: 16,
    borderRadius: 8
  }
});