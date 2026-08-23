import React, { JSX, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Button
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppPro():JSX.Element {
    const [isDarkMode, setIsDarkMode] =  useState( useColorScheme() === "dark");
    const textColor = isDarkMode ? "#FFFFFF" : "#111111";
    const backgroundColor = isDarkMode ? "#111111" : "#FFFFFF";
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
            <View style={styles.container}>
                <Text style={{color: textColor}}>
                    Hello World
                </Text>
                <Button title={isDarkMode ? "Light Mode" : "Dark Mode"} onPress={()=> {
                    setIsDarkMode(dark=> !dark);
                }}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: "600",
    },
})
