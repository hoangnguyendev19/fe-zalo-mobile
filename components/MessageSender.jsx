import { Pressable, Text, View } from 'react-native';
import { Avatar, Divider, Menu } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const MessageSender = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 20,
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchorPosition="bottom"
          style={{ paddingLeft: 10, paddingTop: 10 }}
          anchor={
            <Pressable style={{}} onPress={openMenu}>
              <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </Pressable>
          }
        >
          <Menu.Item
            onPress={() => {}}
            title="Xoá"
            leadingIcon="delete"
            titleStyle={{ fontSize: 14 }}
          />
          <Divider />
          <Menu.Item
            onPress={() => {}}
            title="Thu hồi"
            leadingIcon="undo"
            titleStyle={{ fontSize: 14 }}
          />
        </Menu>
      </View>
      <View
        style={{
          width: 200,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          backgroundColor: '#fff',
        }}
      >
        <Text>Hello, my name is Hoang!</Text>
        <Text style={{ color: 'rgba(0,0,0,0.2)', fontSize: 12, marginTop: 5 }}>16:40</Text>
      </View>
    </View>
  );
};

export default MessageSender;
