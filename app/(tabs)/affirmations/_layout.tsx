import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const AffirmationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default AffirmationLayout;
