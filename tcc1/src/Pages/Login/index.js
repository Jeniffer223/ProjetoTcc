import { View, Text, Image, Button, Alert, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.card}>
    <View>
      <Image
        source={{
          uri: '..src/img/logoTcc.png'
        }}
        style={{ width: 35, height: 45 }}
      />
      <Text>Etec de Taboão da Serra</Text>
      <View style={styles.container}>
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#A0A0A0"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#A0A0A0"
        style={styles.input}
        secureTextEntry
      />
    </View>
      <View style = {{ backgroundColor: '#0118EB', borderRadius: 10, alignItems: 'center', marginTop: 5, width: 250,  }}>
      <Button
        title="Entrar"
        color="#0118EB"
        accessibilityLabel="Botão para entrar no app"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
       <View style={styles.linksContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
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
  },
  input: {
    width: '85%',
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
});