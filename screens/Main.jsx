import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { EvilIcons, Fontisto, AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import BottomTabs from './Main';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messager from './Messager';
import Contact from './Contact';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <View style={{ width: '100%', height: '100%', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: '#0091ff',
        }}
      >
        <EvilIcons name="search" size={32} color="white" />
        <TextInput
          placeholder="Tìm kiếm"
          placeholderTextColor="white"
          style={{ marginHorizontal: 5, outlineStyle: 'none', width: '100%', fontSize: 20 }}
        />
        <Fontisto name="plus-a" size={32} color="white" />
      </View>
      <Tab.Navigator screenOptions={{ tabBarStyle: { paddingVertical: 10 } }}>
        <Tab.Screen
          name="Messager"
          options={{
            headerShown: false,
            title: 'Tin nhắn',
            tabBarIcon: ({ size, focused, color }) => {
              return <AntDesign name="message1" size={size} color={color} />;
            },
          }}
          component={Messager}
        />
        <Tab.Screen
          name="Contact"
          options={{
            headerShown: false,
            title: 'Danh bạ',
            tabBarIcon: ({ size, focused, color }) => {
              return <MaterialIcons name="contact-page" size={size} color={color} />;
            },
          }}
          component={Contact}
        />
        <Tab.Screen
          name="Profile"
          options={{
            headerShown: false,
            title: 'Cá nhân',
            tabBarIcon: ({ size, focused, color }) => {
              return <FontAwesome name="user" size={size} color={color} />;
            },
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Main;
