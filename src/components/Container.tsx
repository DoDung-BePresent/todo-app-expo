import { ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "../styles/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}

const Container = (props: Props) => {
  const { title, back, right, children } = props;
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[
        globalStyles.container,
        {
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: insets.bottom + 50,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default Container;
