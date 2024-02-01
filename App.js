import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   SafeAreaView,
   View,
   TextInput,
   TouchableOpacity,
   Alert} from 'react-native';
import Api from './src/services/api';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {

  const [pokemonNameOrId, setPokemonNameOrId] = useState('');

  const handleInputChange = (text) => {
    setPokemonNameOrId(text);
  };

  async function handleButtonPress() {
    // Faça algo com o valor do texto quando o botão for pressionado
    if(pokemonNameOrId == "") {
      Alert.alert('Campo vazio');
      setPokemonNameOrId("");
    }

    try{
      const response = await Api.get(pokemonNameOrId);
      //Alert.alert(response.data)
      console.log(response.data.name);
    }catch(error){
      console.log(`ERRO: ${error}`)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <View style={styles.content}>
        <Text style={styles.inputText}>Digite o nome ou o ID do pokemon:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          onChangeText={handleInputChange}
          value={pokemonNameOrId}
        />
        
        <CustomButton title="Buscar" onPress={handleButtonPress} />
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
