import React from "react"

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import PlayCard from "./components/PlayCard"

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <PlayCard />
          <PlayCard />
          <PlayCard />
          <PlayCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#ffffff"
  },
  
})