import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Signup from './screens/Signup';
import Messager from './screens/Messager';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
        <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
        <Stack.Screen
          name="Signup"
          options={{
            title: 'Đăng ký',
            headerStyle: { backgroundColor: '#0091ff' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 20 },
          }}
          component={Signup}
        />
        <Stack.Screen
          name="Login"
          options={{
            title: 'Đăng nhập',
            headerStyle: { backgroundColor: '#0091ff' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 20 },
          }}
          component={Login}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{
            title: 'Lấy lại mật khẩu',
            headerStyle: { backgroundColor: '#0091ff' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 20 },
          }}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
