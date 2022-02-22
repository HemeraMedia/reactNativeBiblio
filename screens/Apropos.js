import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function AproposScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Pour plus d'infos sur cette application</Text>
      <Image
        style={{
            width: 250,
            height: 250,
            resizeMode: 'contain'
          }}
      source={require('../assets/apropos.png') } />
    </View>
  );
}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 20,
        color: 'black',
        fontSize: 20
      },
});
