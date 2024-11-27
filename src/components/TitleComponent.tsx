import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import TextComponent from "./TextComponent";
import { fontFamilies } from "../constants/fontFamilies";

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
}

const TitleComponent = (props: Props) => {
  const { text, font, size, color, styles } = props;

  return (
    <TextComponent
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color}
      styles={styles}
      text={text}
    />
  );
};

export default TitleComponent;
