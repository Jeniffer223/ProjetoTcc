import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../../Context/UserContext'; 
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { usuario, setUsuario } = useContext(UserContext); 

  useEffect(() => {
    if (!usuario) {
      navigation.navigate('Login');
    }
  }, [usuario]);

  const handleLogout = () => {
    setUsuario(null);
    navigation.navigate('Login');
  };

  if (!usuario) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📘 SIHEP</Text>
      <Text style={styles.welcome}>Bem-vindo(a), {usuario.nome}!</Text>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Histórico')}>
        <Text style={styles.buttonText}>Histórico Escolar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('DadosPessoais', { usuario })}>
        <Text style={styles.buttonText}>Dados Pessoais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFBF9',
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5E1F1F',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 22,
    color: '#333',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2355D8',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#2355D8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  logoutText: {
    color: '#2355D8',
    fontSize: 16,
    fontWeight: '500',
  },
});
