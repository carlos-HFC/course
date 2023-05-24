import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  header: {
    paddingBottom: 42,
    alignItems: "center"
  },
  headerTitle: {
    alignItems: "center",
    fontSize: 28,
    color: "#fff",
    textAlign: "center"
  },
  fields: {
    marginBottom: 32,
    gap: 4
  },
  fieldsLabel: {
    fontSize: 18,
    color: "#fff"
  },
  fieldsInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: "100%",
    borderRadius: 4,
    color: "#fff"
  },
  action: {
    alignItems: "center",
    marginBottom: 42
  },
  actionButton: {
    borderRadius: 4,
    backgroundColor: "#835dcf",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#613baf"
  },
  actionText: {
    fontSize: 20,
    color: "#4f198d",
    fontWeight: "600"
  },
  result: {
    gap: 16
  },
  resultHeader: {
    paddingBottom: 42,
    alignItems: "center"
  },
  resultTitle: {
    alignItems: "center",
    fontSize: 24,
    color: "#fff"
  },
  resultInfo: {
    flexDirection: "row",
  },
  resultInfoTitle: {
    fontSize: 18,
    color: "#fff"
  },
  resultInfoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff"
  },
});