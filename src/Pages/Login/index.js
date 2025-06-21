import { View, Text, Image, Button, Alert, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../Services/api';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';


export default function Login() {
  
  const navigation = useNavigation();
  const { setUsuario } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
  try {
    const response = await api.post('/login', {
      email,
      senha,
    });

    console.log('Resposta do login:', response.data);

    if (response.data?.usuario?.id_cpf) {
      setUsuario(response.data.usuario); 
      await AsyncStorage.setItem('id_cpf', response.data.usuario.id_cpf.toString());
      Alert.alert('Sucesso', 'Login realizado!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'CPF não recebido da API.');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error.response?.data || error.message);
    const mensagem = error.response?.data?.error || 'Erro ao fazer login.';
    Alert.alert('Erro', mensagem);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image
            source={require('../../../assets/logoTcc.png')}
            style={{
              width: 300,
              height: 80,
              alignSelf: 'center',
              marginTop: 150,
            }}
          />
          <View style={styles.container}>
            <Text>Etec de Taboão da Serra</Text>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#A0A0A0"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
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
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}>
            <Text style={styles.button_txt}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.linkText}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 30,
  },
  input: {
    width: '90%',
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
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  linkText: {
    color: '#2355d8',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0118eb',
    padding: 10,
    borderRadius: 8,
    width: 200,
    marginLeft: 50,
  },
  button_txt: {
    color: '#fff',
  },
});
