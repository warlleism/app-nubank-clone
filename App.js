import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './view/home/homeScreen/index';
import Account from './view/bankAccount/account/index'
import SavedMoney from './view/bankAccount/savedMoney';
import TotalIncome from './view/bankAccount/totalIncome';
import Pay from "./view/home/pay/index"
import PixArea from './view/home/pixArea';
import Transfer from './view/home/transfer';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="SavedMoney" component={SavedMoney} />
      <Stack.Screen name="TotalIncome" component={TotalIncome} />
      <Stack.Screen name="PixArea" component={PixArea} />
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="Transfer" component={Transfer} />
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
