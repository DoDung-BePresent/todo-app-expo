import React from "react";
import Container from "../../components/Container";
import RowComponent from "../../components/RowComponent";
import SectionComponent from "../../components/SectionComponent";
import TextComponent from "../../components/TextComponent";
import TitleComponent from "../../components/TitleComponent";
import { TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import CardComponent from "../../components/CardComponent";
import {
  Add,
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from "iconsax-react-native";
import { colors } from "../../constants/colors";
import TagComponent from "../../components/TagComponent";
import SpaceComponent from "../../components/SpaceComponent";
import CircularComponent from "../../components/CircularComponent";
import CardImageComponent from "../../components/CardImageComponent";
import AvatarGroupComponent from "../../components/AvatarGroupComponent";
import ProgressBarComponent from "../../components/ProgressBarComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
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
                <SpaceComponent height={12} />
                <RowComponent justify="flex-start">
                  <TagComponent
                    text="March 22"
                    onPress={() => console.log("Say bye!")}
                  />
                </RowComponent>
              </View>
              <View>
                <CircularComponent value={80} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent styles={{ alignItems: "flex-start" }}>
            <View style={{ flex: 1 }}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}
                >
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="UX Design" />
                <TextComponent text="Task management mobile app" size={13} />
                <View style={{ marginVertical: 28 }}>
                  <AvatarGroupComponent />
                  <ProgressBarComponent
                    percent="70%"
                    color="#0AACFF"
                    size="large"
                  />
                </View>
                <TextComponent
                  text="Due, 2023 March 03"
                  size={12}
                  color={colors.desc}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{ flex: 1 }}>
              <CardImageComponent color="rgba(33, 150, 243, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}
                >
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" size={18} />
                <AvatarGroupComponent />
                <ProgressBarComponent
                  percent="40%"
                  color="#A2F068"
                  size="small"
                />
              </CardImageComponent>
              <SpaceComponent height={16} />
              <CardImageComponent color="rgba(18, 181, 22, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={[globalStyles.iconContainer]}
                >
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update work" size={18} />
                <TextComponent text="Revision home page" size={13} />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TitleComponent styles={{ flex: 1 }} text="Urgent Tasks" />
          <CardComponent styles={{ marginTop: 10 }}>
            <RowComponent>
              <CircularComponent value={40} radius={36} size={14} />
              <View
                style={{ flex: 1, justifyContent: "center", paddingLeft: 12 }}
              >
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: "absolute",
          bottom: insets.bottom,
          right: 0,
          left: 0,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("AddNewTask")}
          style={[
            globalStyles.row,
            {
              backgroundColor: colors.blue,
              padding: 10,
              borderRadius: 10,
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            },
          ]}
        >
          <TextComponent text="Add new task" flex={0} />
          <Add size={25} color={colors.white} style={{ marginBottom: 3 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
