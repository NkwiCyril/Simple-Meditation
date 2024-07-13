import AppGradient from "@/components/AppGradient";
import GuidedAffimationsGallery from "@/components/GuidedAffimationsGallery";
import AFFIRMATION_GALLERY from "@/constants/AffirmationsGallery";
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with Affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffimationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Affirmation;
