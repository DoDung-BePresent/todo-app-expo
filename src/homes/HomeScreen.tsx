import React from "react";
import Container from "../components/Container";
import RowComponent from "../components/RowComponent";
import SectionComponent from "../components/SectionComponent";
import TextComponent from "../components/TextComponent";
import TitleComponent from "../components/TitleComponent";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import CardComponent from "../components/CardComponent";
import { Element4, Notification, SearchNormal1 } from "iconsax-react-native";
import { colors } from "../constants/colors";

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Jason" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log("Say hi")}
        >
          <TextComponent color="#696B6F" text="Search task" />
          <SearchNormal1 size={20} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <TextComponent text="fag" />
            </View>
            <View>
              <TextComponent text="circle" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
