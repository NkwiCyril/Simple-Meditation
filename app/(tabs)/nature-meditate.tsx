import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar} from "expo-status-bar";

const NatureMeditate = () => {
    return (
        <SafeAreaView>
        <StatusBar style="dark" />
        <Text>Time to Meditate.</Text>
      </SafeAreaView>
    );
}


export default NatureMeditate;
