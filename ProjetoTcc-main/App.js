import Routes from './src/Routes';
import { useEffect } from 'react';
import axios from 'axios';

export default function App() { 
  useEffect(() => {
    axios.get('http://192.168.1.2:3333/teste')
      .then(response => {
        console.log('Dados:', response.data);
      })
      .catch(error => {
        console.error('Erro ao conectar à API:', error.message);
      });
  }, []);
  return (
    <Routes/>
  );
}
