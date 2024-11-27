import { View, Text } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

interface Props {
  color?: string;
  value: number;
  maxValue?: number;
  radius?: number;
  size?: number;
}

const CircularComponent = (props: Props) => {
  const { color, value, maxValue, radius, size } = props;
  return (
    <CircularProgress
      value={value}
      title={`${value}%`}
      radius={radius ?? 46}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={colors.gray2}
      titleColor={colors.text}
      activeStrokeWidth={14}
      inActiveStrokeWidth={14}
      titleFontSize={size ?? 20}
      titleStyle={{
        fontFamily: fontFamilies.semiBold,
        marginTop: 5,
      }}
    />
  );
};

export default CircularComponent;
