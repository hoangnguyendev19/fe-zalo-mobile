import { Pressable, Text, View } from 'react-native';
import { Avatar, Divider, Menu } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const MessageReceiver = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Avatar.Image size={30} source={ImgUser} />
      <View
        style={{
          width: 200,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          backgroundColor: '#fff',
          marginLeft: 10,
        }}
      >
        <Text>Hello, my name is Hoang!</Text>
        <Text style={{ color: 'rgba(0,0,0,0.2)', fontSize: 12, marginTop: 5 }}>16:40</Text>
        <Ionicons name="heart" size={24} color="red" />
      </View>
    </View>
  );
};

export default MessageReceiver;
