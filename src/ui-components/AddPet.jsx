/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createPet, updatePet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useState("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveFiveFourFourThreeValue,
    setTextFieldThreeEightFiveFiveFourFourThreeValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveFiveFourFiveSevenValue,
    setTextFieldThreeEightFiveFiveFourFiveSevenValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveFiveFourFiveZeroValue,
    setTextFieldThreeEightFiveFiveFourFiveZeroValue,
  ] = useState("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = async () => {
    await client.graphql({
      query: createPet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
          age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
          breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
          about: textFieldThreeEightFiveFiveFourFourThreeValue,
          image: textFieldThreeEightFiveFiveFourFiveSevenValue,
          color: textFieldThreeEightFiveFiveFourFiveZeroValue,
        },
      },
    });
  };
  const buttonThreeEightFiveSevenFourSixEightOnClick = async () => {
    await client.graphql({
      query: updatePet.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
          age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
          breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
          about: textFieldThreeEightFiveFiveFourFourThreeValue,
          image: textFieldThreeEightFiveFiveFourFiveSevenValue,
          color: textFieldThreeEightFiveFiveFourFiveZeroValue,
          id: pet?.id,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(164,213,248,1)"
      {...getOverrideProps(overrides, "AddPet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="844px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="200px"
          direction="row"
          width="582px"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="582px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Pet"
          {...getOverrideProps(overrides, "Add Pet")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Kitty"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="5"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            placeholder="Labrador"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="Cute, Funny"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveFiveFourFourThreeValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveFiveFourFourThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3855443")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Color"
            placeholder="Golden"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveFiveFourFiveZeroValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveFiveFourFiveZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3855450")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="image-url"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveFiveFourFiveSevenValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveFiveFourFiveSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3855457")}
          ></TextField>
        </Flex>
        <View
          width="353px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(164,213,248,1)"
          {...getOverrideProps(overrides, "Frame 439")}
        >
          <Button
            width="90px"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor="rgba(0,64,77,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            width="90px"
            height="unset"
            position="absolute"
            top="0px"
            left="130px"
            backgroundColor="rgba(0,64,77,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeEightFiveSevenFourSixEightOnClick();
            }}
            {...getOverrideProps(overrides, "Button3857468")}
          ></Button>
          <Button
            width="90px"
            height="unset"
            position="absolute"
            top="0px"
            left="263px"
            backgroundColor="rgba(0,64,77,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update2"
            {...getOverrideProps(overrides, "Button38664164")}
          ></Button>
        </View>
      </Flex>
    </Flex>
  );
}
