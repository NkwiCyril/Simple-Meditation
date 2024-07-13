import React from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/MeditationImages";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <View className="mb-6">
        <Text className="text-gray-200 font-bold text-3xl text-left">
          Welcome, Nkwi Cyril
        </Text>
        <Text className="text-gray-400 text-xl text-left font-medium">
          Start your mediatation practice today.
        </Text>
      </View>
      <View>
        <FlatList
          data={MEDITATION_DATA}
          className="mb-20"
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("press")}
              className="h-48 my-3 rounded-md overflow-hidden"
            >
              <ImageBackground
                source={MEDITATION_IMAGES[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                <LinearGradient
                  colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                  className="flex-1 justify-center items-center"
                >
                  <Text className="text-gray-100 text-3xl font-semibold text-center">
                    {item.title}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          )}
        ></FlatList>
      </View>
    </AppGradient>
  );
};

export default NatureMeditate;
