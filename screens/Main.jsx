import { Pressable, TextInput, View } from 'react-native';
import { EvilIcons, AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Messager from './Messager';
import Contact from './Contact';
import Profile from './Profile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Menu } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConversationAPI from '../api/ConversationAPI';
import { getAllConversations } from '../redux/conversationSlice';

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ConversationAPI.getAllConversationForUser();
      if (data) {
        dispatch(getAllConversations(data));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddFriend = () => {
    closeMenu();
    navigation.navigate('AddFriend');
  };
  const handleCreateGroup = () => {
    closeMenu();
    navigation.navigate('CreateGroup');
  };
  return (
    <SafeAreaView style={{ width: '100%', height: '100%', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: '#0091ff',
        }}
      >
        <EvilIcons name="search" size={26} color="white" />
        <TextInput
          placeholder="Tìm kiếm"
          placeholderTextColor="white"
          style={{ marginHorizontal: 5, width: '80%', fontSize: 16 }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchorPosition="bottom"
            style={{ paddingLeft: 10, paddingTop: 10 }}
            anchor={
              <Pressable style={{}} onPress={openMenu}>
                <AntDesign name="plus" size={26} color="white" />
              </Pressable>
            }
          >
            <Menu.Item
              onPress={handleAddFriend}
              title="Thêm bạn"
              leadingIcon="account-plus-outline"
              titleStyle={{ fontSize: 14 }}
            />
            <Divider />
            <Menu.Item
              onPress={handleCreateGroup}
              title="Tạo nhóm"
              leadingIcon="account-multiple-plus-outline"
              titleStyle={{ fontSize: 14 }}
            />
          </Menu>
        </View>
      </View>
      <Tab.Navigator screenOptions={{ tabBarStyle: {} }}>
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
    </SafeAreaView>
  );
};

export default Main;
