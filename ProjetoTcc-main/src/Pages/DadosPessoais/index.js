import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import api from '../../Services/api';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DadosPessoais({ navigation }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const cpf = await AsyncStorage.getItem('id_cpf');
        console.log('CPF recuperado:', cpf);
        const response = await api.get('/usuario-logado', {
          params: { id_cpf: cpf }
        });
        setUsuario(response.data);
      } catch (error) {
        console.log('Erro ao buscar usuário:', error);
      }
    }
    fetchUsuario();
  }, []);
  function handleEditar() {
    console.log('Usuário no clique:', usuario);
    // Navega para a tela de edição, passando os dados do usuário
    if (usuario) {
      navigation.navigate('EditarDados', { usuario });
    } else {
      Alert.alert('Atenção', 'Dados do usuário ainda não foram carregados.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <TouchableOpacity style={styles.card} onPress={handleEditar}>
        <Text style={styles.label}><Text style={styles.bold}>Nome:</Text> {usuario?.nome}</Text>
        <Text style={styles.label}><Text style={styles.bold}>E-mail:</Text> {usuario?.email}</Text>
        <Text style={styles.label}><Text style={styles.bold}>Telefone:</Text> {usuario?.telefone}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('EditarDados')}>
        <Text style={styles.Text}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFBF9',
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#5E1F1F',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFF',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  backButton: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#2355D8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  Button:{
    backgroundColor: '#2355D8', 
    borderColor: '#2355D8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 40,
    borderWidth: 1,
  },
  Text: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
  },
  backText: {
    color: '#2355D8',
    fontSize: 16,
    fontWeight: '500',
  },
});
