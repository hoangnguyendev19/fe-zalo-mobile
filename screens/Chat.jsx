import { useEffect } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MessageReceiver from '../components/MessageReceiver';
import MessageSender from '../components/MessageSender';

const Chat = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hoang Nguyen',
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}
    >
      <ScrollView style={{ paddingTop: 10, backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <MessageReceiver />
        <MessageSender />
        <MessageReceiver />
        <MessageSender />
        <MessageReceiver />
        <MessageSender />
        <MessageReceiver />
        <MessageSender />
        <MessageReceiver />
        <MessageSender />
        <MessageReceiver />
        <MessageSender />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 'auto',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderStyle: 'solid',
          borderColor: '#ccc',
        }}
      >
        <TextInput
          placeholder="Tin nhắn"
          placeholderTextColor="rgba(0,0,0,0.2)"
          style={{ width: '60%' }}
        />
        <Ionicons name="attach" size={24} color="#0091ff" />
        <Ionicons name="image-outline" size={24} color="#0091ff" style={{ marginLeft: 20 }} />
        <Pressable style={{ marginLeft: 20 }}>
          <Text style={{ color: '#0091ff', fontSize: 16, fontWeight: 'bold' }}>Gửi</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Chat;
