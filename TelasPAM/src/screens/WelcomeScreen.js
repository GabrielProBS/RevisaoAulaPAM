// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Ótimo dia!</Text>
      <Image
        source={require('../assets/casual_dog.png')} // Substitua pelo caminho da imagem do cão
        style={styles.image}
      />

      <Text style={styles.question}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.buttonGoogle} onPress={()=>navigation.navigate('Login')}>
        <Image
          source={require('../assets/Google.png')} // Substitua pelo caminho do ícone do Google
          style={{ width: 22.5, height: 22.5, marginRight: 10 }}
        />
        <Text style={{ color: '#FFFFFF' }}>Continuar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOptions}>
        <Text style={{ color: '#000000' }}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Cor de fundo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '35%'
  },
  greeting: {
    fontSize: 24,
    color: '#000000',
  },
  question: {
    fontSize: 18,
    color: '#000000',
  },
  buttonOptions: {
    marginTop: 10,
    padding: 15,
    borderColor: '#25A45D',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonGoogle: {
    backgroundColor: '#25A45D',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    
    
  },
});

export default WelcomeScreen;
