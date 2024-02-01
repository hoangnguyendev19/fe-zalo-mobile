import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import Login from './src/views/Login';
import Options from './src/views/Options';
import ForgotPassword from './src/views/ForgotPassword';
=======
import Start from './screens/Start';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Signup from './screens/Signup';
import Main from './screens/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
>>>>>>> b1b1f701d9bc66203a01b85acb786c87395483b0


const Stack = createNativeStackNavigator()
export default function App() {
  return (
<<<<<<< HEAD
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


=======
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
            <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
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
      </PaperProvider>
    </SafeAreaProvider>
  );
}
>>>>>>> b1b1f701d9bc66203a01b85acb786c87395483b0
