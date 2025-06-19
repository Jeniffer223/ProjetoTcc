import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../Services/api';
import Toast from '../Toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [id_cpf, setCpf] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
  };

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) return showToast('As senhas não coincidem.');
    if (!senha) return showToast('Informe uma senha.');
    if (senha.length < 6) return showToast('A senha deve ter no mínimo 6 caracteres.');
    if (!/^\d{11}$/.test(id_cpf)) return showToast('CPF inválido. Use 11 números.');
    if (!nome || !email || !telefone || !id_cpf || !senha || !confirmarSenha)
      return showToast('Preencha todos os campos.');

    try {
      await api.post('/cadastro', { id_cpf, nome, email, telefone, senha });
      showToast('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.response?.data || error.message);
      showToast(error.response?.data?.error || 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.subtitle}>ETEC de Taboão da Serra</Text>

      <TextInput style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#A0A0A0"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput style={styles.input}
        placeholder="CPF (somente números)"
        placeholderTextColor="#A0A0A0"
        value={id_cpf}
        onChangeText={setCpf}
      />
      <TextInput style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#A0A0A0"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showPassword}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showConfirmPassword}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon name={showConfirmPassword} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Entrar</Text>
      </TouchableOpacity>

      <Toast visible={toastVisible} message={toastMessage} onHide={() => setToastVisible(false)} />
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
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginVertical: 10,
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
  icon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
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
