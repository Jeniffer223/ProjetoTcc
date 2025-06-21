import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/Routes/index';
import { UserProvider } from './src/Context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </UserProvider>
  );
}
