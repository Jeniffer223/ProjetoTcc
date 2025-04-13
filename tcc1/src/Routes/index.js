import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';
import EsqueciSenha from '../Pages/EsqueciSenha/index';
import Historico from '../Pages/Historico/index';
import DadosPessoais from '../Pages/DadosPessoais/index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name='Cadastro' component={Cadastro}/>
      <Drawer.Screen name='EsqueciSenha' component={EsqueciSenha}/>
      <Drawer.Screen name='Histórico' component={Historico}/>
      <Drawer.Screen name='DadosPessoais' component={DadosPessoais}/>
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}