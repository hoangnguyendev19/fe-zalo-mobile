import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Signup from './screens/Signup';
import Main from './screens/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import Chat from './screens/Chat';
<<<<<<< HEAD
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
=======
>>>>>>> 23cda4cd4dc0948aac9accf83522a3f006d68085

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: true }} name="Chat" component={Chat} />

            <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
            <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
            <Stack.Screen
              options={{
                title: 'Chat',
                headerStyle: { backgroundColor: '#0091ff' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontSize: 16 },
                headerRight: () => {
                  return (
                    <View style={{ flexDirection: 'row' }}>
                      <Pressable>
                        <Feather name="phone" size={24} color="white" />
                      </Pressable>
                      <Pressable>
                        <Feather name="video" size={24} color="white" style={{ marginLeft: 20 }} />
                      </Pressable>
                      <Pressable>
                        <AntDesign name="bars" size={24} color="white" style={{ marginLeft: 20 }} />
                      </Pressable>
                    </View>
                  );
                },
              }}
              name="Chat"
              component={Chat}
            />
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
