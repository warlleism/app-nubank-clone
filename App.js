import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './view/homeScreen';
import Teste from './view/teste/index'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerMode: 'none',
    }}
    >
      <Stack.Screen name="Home" component={Inicio} />
      <Stack.Screen name="Teste" component={Teste} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
