import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Alert,
  TextInput} from 'react-native';

import Api from  "../services/api";


export default function DetailsScreen({route}) {

    const pokemonNameOrId = route.params.pokemonNameOrId;
    
    const [name, setName] = useState('');
    const [urlImagem, setUrlImagem] = useState();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [progresso, setProgresso] = useState(0);


    async function searchPokemon() {
        try{
            const response = await Api.get(pokemonNameOrId);
            setName(response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1));
            setUrlImagem(response.data.sprites.other["official-artwork"].front_default);
            setHeight(response.data.height);
            setWeight(response.data.weight);
            setHp(response.data.stats[0].base_stat);
            setAttack(response.data.stats[1].base_stat);
            setDefense(response.data.stats[2].base_stat);
            setSpeed(response.data.stats[5].base_stat);
        }catch(error){
            console.log(`ERRO: ${error}`)
        }
    }

    searchPokemon()

  return (
    <SafeAreaView style={styles.container}>
        <TextInput style={styles.title} value={name} editable={false}/>
        <View style={styles.content}>
        <Image source={{ uri: urlImagem }} style={styles.imagem} />
        <TextInput style={styles.inputText} value={height.toString()} editable={false}/>
        <TextInput style={styles.inputText} value={weight.toString()} editable={false}/>
        <TextInput style={styles.inputText} value={hp.toString()} editable={false}/>
        <TextInput style={styles.inputText} value={attack.toString()} editable={false}/>
        <TextInput style={styles.inputText} value={defense.toString()} editable={false}/>
        <TextInput style={styles.inputText} value={speed.toString()} editable={false}/>
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
  imagem: {
    width: 200,
    height: 200,
  },
});
