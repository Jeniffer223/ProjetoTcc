import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../Services/api';
import { UserContext } from '../../Context/UserContext';

export default function EditarDados() {
  const route = useRoute();
  const navigation = useNavigation();

  const routeUsuario = route.params?.usuario;
  const { usuario, setUsuario } = useContext(UserContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setNome(usuario?.nome || '');
      setEmail(usuario?.email || '');
      setTelefone(usuario?.telefone || '');
    }, [usuario])
  );

  const handleSalvar = async () => {
    if (!usuario) {
      Alert.alert('Erro', 'Usuário não encontrado.');
      return;
    }
    try {
      const response = await api.put('/atualizar-usuario', {
        id_cpf: usuario.id_cpf,
        nome,
        email,
        telefone,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Dados atualizados com sucesso');
         setUsuario({ ...usuario, nome, email, telefone });
        navigation.navigate('Home'); 
      } else {
        Alert.alert('Erro', 'Não foi possível atualizar os dados.');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      Alert.alert('Erro', 'Houve um problema ao salvar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Dados</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DadosPessoais')}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    paddingTop: 150, 
  },
  title: {
    fontSize: 26,
    color: '#5E1F1F',
    fontWeight: 'bold',
    marginBottom: 30,
    paddingTop: 30,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#2355d8',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16 
  },
  link: { 
    color: '#2355d8', 
    marginTop: 20, 
    textAlign: 'center' 
  },
});
