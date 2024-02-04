import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   SafeAreaView,
   View,
   TextInput,
   TouchableOpacity,
   Alert,
   Button} from 'react-native';


export default function DetailsScreen({route}) {

    const pokemonName = route.params.pokemonName;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <View style={styles.content}>
        <Text style={styles.inputText}>{pokemonName}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 52,
    paddingTop: 30
  },
  content: {
    paddingTop: 50
  },
  inputText: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 15
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonContainer: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
