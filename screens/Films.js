import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StatusBar, StyleSheet, Image, Text, View } from "react-native";

  
const Films = () => {

const [films, setFilms] = useState([]);

useEffect(() => {
  const getFilms = async () => {
    try {
      const response = await fetch(
        'https://greta-bibliotheque-jh.herokuapp.com/api/films'
      );
      const json = await response.json();
      //console.log(json.films)
      setFilms(json.films);
    } catch (error) {
      //console.error(error);
    }
  };
  getFilms();
}, []);

const Item = ({ titre, annee, auteur, imageUrl }) => (
    <View style={styles.item}>
      <Text style={styles.auteur}>{auteur}</Text>
      <Text style={styles.titre}>{titre}</Text>
      <Text style={styles.annee}>({annee})</Text>
      {/* <Image style={styles.image} source={require('../assets/musiques.png') } /> */}
      <Image style={styles.imageUrl} source={{uri:imageUrl}} />
    </View>
  );
  
const renderItem = ({ item }) => (
    <Item auteur={item.auteur} titre={item.titre} annee={item.annee} imageUrl={item.imageUrl} />
  );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={films}
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
    imageUrl: {
      alignItems: 'center',
      // width: 200,
      height: 150,
      resizeMode: 'contain',
      marginVertical: 9
    },
  });
  
  export default Films;
