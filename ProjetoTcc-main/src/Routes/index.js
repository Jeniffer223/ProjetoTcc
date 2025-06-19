import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';
import EsqueciSenha from '../Pages/EsqueciSenha/index';
import Historico from '../Pages/Historico/index';
import DadosPessoais from '../Pages/DadosPessoais/index';
import EditarDados from '../Pages/EditarDados/index';

const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} options={{
    headerLeft: () => null, headerShown: false }} />
      <Drawer.Screen name="Home" component={Home} options={{
    headerLeft: () => null, headerShown: false }} />
      <Drawer.Screen name='Cadastro' component={Cadastro} options={{
    headerLeft: () => null, headerShown: false }} />
      <Drawer.Screen name='EsqueciSenha' component={EsqueciSenha} options={{
    headerLeft: () => null, headerShown: false }} />
      <Drawer.Screen name='Histórico' component={Historico} options={{
    headerLeft: () => null, headerShown: false }} />
      <Drawer.Screen name='DadosPessoais' component={DadosPessoais} options={{
    headerLeft: () => null, headerShown: false }} />
    <Drawer.Screen name="EditarDados" component={EditarDados} options={{ headerShown: false }} />
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}