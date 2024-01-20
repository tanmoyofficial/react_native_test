import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function PlayCard() {

    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={styles.time}>
                    <Text>7 Min</Text>
                </View>
                <View style={styles.link}>
                    <Text>More</Text>
                </View>
            </View>
            <View style={styles.cardMiddle}>
                <Text style={styles.subTitle}>Today's Session</Text>
                <Text style={styles.title}>Just Relax</Text>
                <Text style={styles.desc}>Perfect Meditation</Text>
            </View>
            <View style={styles.cardBottom}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Play</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#ff0000",
        borderRadius: 10,
        padding: 30,
        height: 400,
        marginVertical: 15
    },
    cardTop: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardMiddle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    cardBottom: {},

    subTitle: {
        fontSize: 20,
        color: "#ffffff",
    },
    title: {
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "bold"
    },
    desc: {
        fontSize: 16
    },
    between: {},
    time: {
        backgroundColor: "rgba(255,255,255,0.4)",
        height: 36,
        padding: 8,
        borderRadius: 5
    },
    link: {
        backgroundColor: "rgba(255,255,255,0.4)",
        height: 36,
        padding: 8,
        borderRadius: 5
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        color: "#333333",
    }
})