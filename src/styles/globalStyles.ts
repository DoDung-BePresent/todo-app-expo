import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 20,
    paddingTop: 52,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamilies.regular,
    color: colors.text,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: colors.blue,
  },
});
