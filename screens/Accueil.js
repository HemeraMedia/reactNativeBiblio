import React from "react";
import { StyleSheet, Image, Text, View} from "react-native";

export default function AccueilScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Bibliothèque Multimedia</Text>

      <Image
        style={{
          width: 250,
          height: 250,
          resizeMode: 'contain'
        }}
        source={require('../assets/multimedia.png') } />
      <Text style={styles.title}>TP Greta 21</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 25,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    textShadowColor: 'grey',
  },
});
