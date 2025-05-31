import api from '../../Services/api';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function EditarDados({ navigation }) {
    const route = useRoute();
    const { usuario } = route.params || {};

    const [nome, setNome] = useState(usuario?.nome);
    const [email, setEmail] = useState(usuario?.email);
    const [telefone, setTelefone] = useState(usuario?.telefone);

    const handleSalvar = async () => {
    try {
      const response = await api.put('/atualizar-usuario', {
        id_cpf: usuario.id_cpf,
        nome,
        email,
        telefone,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Dados atualizados com sucesso');
        navigation.goBack();
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

      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
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
    buttonText: { color: '#fff', fontSize: 16 },
    link: { color: '#2355d8', marginTop: 20, textAlign: 'center' },
});
