import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './view/home/homeScreen/index';
import Account from './view/home/bankAccount/account'
import SavedMoney from './view/home/bankAccount/savedMoney';
import TotalIncome from './view/home/bankAccount/totalIncome';
import Pay from "./view/home/pay/index"
import PixArea from './view/home/pixArea';
import Transfer from './view/home/transfer';
import Depositar from './view/home/deposit';
import CellPhoneRecharge from './view/home/cellPhoneRecharge/numberRecharge/index';
import SelectOperator from './view/home/cellPhoneRecharge/selectOperator';
import Profile from './view/home/profile';
import MyCards from './view/home/myCards';
import Cripto from './view/home/cripto';
import Demand from './view/home/demand';
import Donation from './view/home/donation';
import InternationalTransfer from "./view/home/internacionalTransfer"
import Invest from "./view/home/invest"
import PjAccount from './view/home/pjAccount';
import NoBureaucracy from './view/home/noBureaucracy';

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
      <Stack.Screen name="Deposit" component={Depositar} />
      <Stack.Screen name="Recharge" component={CellPhoneRecharge} />
      <Stack.Screen name="Operator" component={SelectOperator} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Cards" component={MyCards} />
      <Stack.Screen name="Cripto" component={Cripto} />
      <Stack.Screen name="Demand" component={Demand} />
      <Stack.Screen name="Donation" component={Donation} />
      <Stack.Screen name="InternationalTransfer" component={InternationalTransfer} />
      <Stack.Screen name="Invest" component={Invest} />
      <Stack.Screen name="PjAccount" component={PjAccount} />
      <Stack.Screen name="NoBureaucracy" component={NoBureaucracy} />
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
