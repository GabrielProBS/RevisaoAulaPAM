// screens/LoginScreen.js
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';

const LoginScreen = () => {
  const [lembrar, setLembrar] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.info}>com E-mail e senha</Text>
      <Text style={{ fontSize: 16 }}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
      />
      <Text style={{ fontSize: 16 }}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={{ color: '#FFFFFF' }}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
    <Pressable style={styles.forgetContainer} onPress={() => setLembrar(!lembrar)}>
        <View style={[styles.checkbox, lembrar && styles.checkboxMarcado]}>
            {lembrar && <View style={styles.check} />}
        </View>
        <Text style={styles.forgetText}>Lembrar senha</Text>
    </Pressable>
      <Pressable><Text style={styles.link}>Esqueci minha senha</Text></Pressable>
      </View>
      <View style={styles.infoContainer}>
      <Text style={styles.info}>Ou continue com</Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => {}}>
            <Image
            source={require('../assets/Google.png')} // Substitua pelo caminho do ícone do Google
            style={styles.googleIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <Image
            source={require('../assets/Facebook.png')} // Substitua pelo caminho do ícone do Facebook
            style={styles.facebookIcon}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Cor de fundo
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    height: '7.5%'
  },
  linkContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    forgetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#34B89A',
        borderRadius: 5,
        marginRight: 10,
    },

    checkboxMarcado: {
        backgroundColor: '#25A45D',
    },

    check: {
        width: 12,
        height: 12,
        backgroundColor: '#25A45D',
        borderRadius: 3,
    },

    forgetText: {
        color: '#34B89A',
        marginVertical: 10,
    },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

    buttonLogin: {
        backgroundColor: '#25A45D',
        padding: 15,
        borderRadius: 5,
        width: '48%',
        alignItems: 'center',
    },

    buttonCadastrar: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 5,
        borderColor: '#25A45D',
        borderWidth: 1,
        width: '48%',
        alignItems: 'center',
    },

  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  googleIcon: {
    width: 45,
    height: 45,
  },
  facebookIcon: {
    width: 45,
    height: 45,
    },
});

export default LoginScreen;
