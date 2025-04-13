import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function TelaEsqueciSenha({ navigation }) {
  const handleRecuperarSenha = () => {
    Alert.alert('Recuperação enviada', 'Se o e-mail estiver correto, você receberá instruções para redefinir a senha.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Esqueceu a senha?</Text>
      <Text style={styles.subtitle}>Informe seu e-mail para redefinir a senha</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail cadastrado"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleRecuperarSenha}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar ao login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FDFBF9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#202020',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F3EF',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  button: {
    width: '100%',
    backgroundColor: '#2355d8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: '#2355d8',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
  },
});
