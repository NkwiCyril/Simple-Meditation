import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
} from "react-native";

interface GuidedAffimationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffimationsGallery = ({
  title,
  previews,
}: GuidedAffimationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full rounded-md"
                  />
                  <Text>ProductGallery</Text>
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GuidedAffimationsGallery;
