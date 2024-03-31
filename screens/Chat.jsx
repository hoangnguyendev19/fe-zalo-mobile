import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MessageReceiver from '../components/MessageReceiver';
import MessageSender from '../components/MessageSender';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import MessageAPI from '../api/MessageAPI';
import * as ImagePicker from 'expo-image-picker';
import { Modal } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import UploadAPI from '../api/UploadAPI';

const Chat = ({ navigation, route }) => {
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [type, setType] = useState('TEXT'); // TEXT - IMAGE - FILE - VIDEO

  const { conversationId, name } = route.params;
  const { user } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });

    const fetchData = async () => {
      const data = await MessageAPI.getAllMessageForConversation(conversationId);

      if (data) {
        setMessages(data);
      }
    };

    fetchData();
  }, [navigation, conversationId]);

  useEffect(() => {
    const newSocket = io(`${process.env.EXPO_PUBLIC_SOCKET_URL}`);
    newSocket.emit('join_room', { conversationId, userId: user.id });
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.off('receive_message');
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('revoke_message', (messageId) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === messageId) {
              return { ...msg, isRevoked: true };
            }
            return msg;
          });
        });
      });

      return () => {
        socket.off('revoke_message');
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('like_message', (messageId) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === messageId) {
              return { ...msg, likes: [...msg.likes, user.id] };
            }
            return msg;
          });
        });
      });

      return () => {
        socket.off('like_message');
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('unlike_message', (messageId) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === messageId) {
              const newLikes = msg.likes.filter((uid) => uid !== user.id);
              return { ...msg, likes: [...newLikes] };
            }
            return msg;
          });
        });
      });

      return () => {
        socket.off('unlike_message');
      };
    }
  }, [socket]);

  const handleSendMessage = () => {
    const message = {
      content,
      type,
      conversationId,
      senderId: user.id,
    };
    if (socket) {
      socket.emit('send_message', message);
      setContent('');
    }
  };

  const handleRevokeMessage = (messageId) => {
    if (socket) {
      socket.emit('revoke_message', { messageId, userId: user.id });
    }
  };

  const handleLikeMessage = (messageId) => {
    if (socket) {
      socket.emit('like_message', { messageId, userId: user.id });
    }
  };

  const handleUnlikeMessage = (messageId) => {
    if (socket) {
      socket.emit('unlike_message', { messageId, userId: user.id });
    }
  };

  const handleZoomImage = (img) => {
    setImage(img);
    setVisible(true);
  };

  const handlePickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const formData = new FormData();
        formData.append('file', {
          uri: result.assets[0].uri,
          name: result.assets[0].type === 'image' ? 'image' : 'video',
          type: result.assets[0].mimeType,
        });

        const data = await UploadAPI.uploadImage(formData);

        if (data) {
          const message = {
            content: data,
            type: result.assets[0].type === 'image' ? 'IMAGE' : 'VIDEO',
            conversationId,
            senderId: user.id,
          };
          if (socket) {
            socket.emit('send_message', message);
          }
        }
      }
    } catch (error) {
      console.log('Error: ', error.message);
    }
  };

  const handlePickFile = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled) {
        const formData = new FormData();
        formData.append('file', {
          uri: result.assets[0].uri,
          name: result.assets[0].name,
          type: result.assets[0].mimeType,
        });

        const data = await UploadAPI.uploadFile(formData);
        if (data) {
          const message = {
            content: data,
            type: 'FILE',
            conversationId,
            senderId: user.id,
          };
          if (socket) {
            socket.emit('send_message', message);
          }
        }
      }
    } catch (error) {
      console.log('Error: ', error.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}
    >
      <ScrollView style={{ paddingTop: 10, backgroundColor: 'rgba(0,0,0,0.1)' }}>
        {messages.length > 0 &&
          messages.map((message) => {
            if (message.senderId.id === user?.id) {
              return (
                <MessageSender
                  key={message.id}
                  message={message}
                  handleZoomImage={handleZoomImage}
                  handleRevokeMessage={handleRevokeMessage}
                />
              );
            } else {
              return (
                <MessageReceiver
                  key={message.id}
                  message={message}
                  handleZoomImage={handleZoomImage}
                  handleLikeMessage={handleLikeMessage}
                  handleUnlikeMessage={handleUnlikeMessage}
                />
              );
            }
          })}
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
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <Pressable onPress={handlePickFile}>
          <Ionicons name="attach" size={24} color="#0091ff" />
        </Pressable>
        <Pressable style={{ marginLeft: 20 }} onPress={handlePickImage}>
          <Ionicons name="image-outline" size={24} color="#0091ff" />
        </Pressable>
        <Pressable style={{ marginLeft: 20 }} onPress={handleSendMessage}>
          <Text style={{ color: '#0091ff', fontSize: 16, fontWeight: 'bold' }}>Gửi</Text>
        </Pressable>
      </View>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      </Modal>
    </View>
  );
};

export default Chat;
