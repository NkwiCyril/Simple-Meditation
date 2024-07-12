import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title="",
  textStyle = "",
  containerStyles = "",
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;
