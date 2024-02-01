import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login';
import Options from './src/views/Options';
import ForgotPassword from './src/views/ForgotPassword';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator 
    //     initialRouteName='Options'
    //     screenOptions={{headerShown: false}}
    //   >
    //      <Stack.Screen
    //       name='Options'
    //       component={Options}
    //     />
    //     <Stack.Screen
    //       name='Login'
    //       component={Login}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen options={{ headerShown: false }} name="Options" component={Options} />
     {/* <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} /> */}
      {/* <Stack.Screen
        name="Signup"
        options={{
          title: 'Đăng ký',
          headerStyle: { backgroundColor: '#0091ff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontSize: 20 },
        }}
        component={Signup}
      /> */}
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
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}


