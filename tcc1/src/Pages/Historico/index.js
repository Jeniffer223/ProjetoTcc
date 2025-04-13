import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HistoricoEscolar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico Escolar</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Curso:</Text>
        <Text style={styles.value}>Desenvolvimento de Sistemas</Text>

        <Text style={styles.label}>Ano:</Text>
        <Text style={styles.value}>2023</Text>

        <Text style={styles.label}>Média:</Text>
        <Text style={styles.value}>8.7</Text>

        <Text style={styles.label}>Frequência:</Text>
        <Text style={styles.value}>94%</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
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
  value: {
    fontSize: 16,
    color: '#555',
  },
  backButton: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#2355D8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  backText: {
    color: '#2355D8',
    fontSize: 16,
    fontWeight: '500',
 },
}); 
