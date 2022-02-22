import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StatusBar, StyleSheet, Button, Image, Text, View } from "react-native";

  
const Musiques = () => {

const [musiques, setMusiques] = useState([]);
//-------Ajout UseEffect----------------------------------------
useEffect(() => {
  const getMusiques = async () => {
    try {
      const response = await fetch(
        'https://greta-bibliotheque.herokuapp.com/api/musiques'
      );
      const json = await response.json();
      //console.log(json.musiques)
      setMusiques(json.musiques);
    } catch (error) {
      //console.error(error);
    }
  };
  getMusiques();
}, []);

const Item = ({ titre, annee, auteur, image }) => (
    <View style={styles.item}>
      <Text style={styles.auteur}>{auteur}</Text>
      <Text style={styles.titre}>{titre}</Text>
      <Text style={styles.annee}>({annee})</Text>
      {/* <Image style={styles.image} source={require('../assets/musiques.png') } /> */}
      <Image style={styles.image} source={{uri:image}} />
    </View>
  );
  
const renderItem = ({ item }) => (
    <Item auteur={item.auteur} titre={item.titre} annee={item.annee} image={item.imageUrl} />
  );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={musiques}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#cdc7c5',
      padding: 15,
      marginVertical: 10,
      marginHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
    },
    auteur: {
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    titre: {
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      textTransform: 'capitalize',
      fontStyle: "italic",
      marginVertical : 7
    },
    annee: {
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
    },
    image: {
      alignItems: 'center',
      // width: 200,
      height: 150,
      resizeMode: 'contain',
      marginVertical: 9
    },
  });
  
  export default Musiques;
