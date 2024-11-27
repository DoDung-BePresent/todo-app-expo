import { View, Text, Image } from "react-native";
import React from "react";
import RowComponent from "./RowComponent";
import TextComponent from "./TextComponent";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

const AvatarGroupComponent = () => {
  const uidsLength = 10;
  const imageUrl =
    "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474174ewO/anh-meme-meo-khoc-cuc-cute_042216244.jpg";

  const imageStyle = {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.white,
  };

  return (
    <RowComponent justify="flex-start">
      {Array.from({ length: uidsLength }).map(
        (item, index) =>
          index < 3 && (
            <Image
              source={{ uri: imageUrl }}
              key={index}
              style={[
                imageStyle,
                {
                  marginLeft: index > 0 ? -10 : 0,
                },
              ]}
            />
          )
      )}
      {uidsLength > 5 && (
        <View
          style={[
            imageStyle,
            {
              backgroundColor: "coral",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              marginLeft: -10,
            },
          ]}
        >
          <TextComponent
            flex={0}
            styles={{ lineHeight: 19 }}
            size={12}
            font={fontFamilies.semiBold}
            text={`+${uidsLength - 3 > 9 ? 9 : uidsLength - 3}`}
          />
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarGroupComponent;
