import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';
import Historico from '../Pages/Historico/index';
import DadosPessoais from '../Pages/DadosPessoais/index';
import EditarDados from '../Pages/EditarDados/index';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Drawer.Screen name="Histórico" component={Historico} options={{ headerShown: false }} />
      <Drawer.Screen name="DadosPessoais" component={DadosPessoais} options={{ headerShown: false }} />
      <Drawer.Screen name="EditarDados" component={EditarDados} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
