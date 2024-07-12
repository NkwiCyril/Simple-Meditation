import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppGradient = (children: any, colors: string[]) => {
    return (
        <LinearGradient colors={colors} className='flex-1 '>
            
        </LinearGradient>
    );
}

const styles = StyleSheet.create({})

export default AppGradient;
