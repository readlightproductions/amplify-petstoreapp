/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import MyIcon from "./MyIcon";
import { Button, Flex, Heading, Image, Text } from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1435px"
      height="101px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(250,133,133,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <MyIcon
        width="54px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="favorite"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
      <Flex
        gap="40px"
        direction="row"
        width="126px"
        height="100px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="126px"
          height="28px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Pet"
          {...getOverrideProps(overrides, "Add Pet")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="104px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Signout"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="3px 0px 3px 0px"
          {...getOverrideProps(overrides, "Frame 440")}
        >
          <Image
            width="70px"
            height="70px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={authAttributes["profile"]}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Heading
            width="unset"
            height="35px"
            shrink="0"
            level="4"
            children={authAttributes["name"]}
            {...getOverrideProps(overrides, "Username")}
          ></Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}
