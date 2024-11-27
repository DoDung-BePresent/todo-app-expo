import { View, Text } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
}

const CircularComponent = (props: Props) => {
  const { color, value, maxValue } = props;
  return (
    <CircularProgress
      value={value}
      title={`${value}%`}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={colors.gray2}
      titleColor={colors.text}
      titleFontSize={30}
      titleStyle={{
        fontFamily: fontFamilies.semiBold,
        marginTop: 10,
      }}
    />
  );
};

export default CircularComponent;
