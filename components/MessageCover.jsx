import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const MessageCover = ({ navigation, conver }) => {
  let { name, members, admin, type, id } = conver;
  const { user } = useSelector((state) => state.user);
  const [friend, setFriend] = useState({});

  useEffect(() => {
    if (type === 'FRIEND') {
      const member = members.filter((mem) => mem.id !== user.id);
      setFriend(member[0]);
    }
  }, []);

  const handlePress = () => {
    if (type === 'GROUP') {
      navigation.navigate('Chat', { conversationId: id, name });
    } else {
      navigation.navigate('Chat', { conversationId: id, name: friend?.fullName });
    }
  };

  return (
    <Pressable onPress={handlePress}>
      {type === 'GROUP' ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <Avatar.Text size={50} label="GROUP" labelStyle={{ fontSize: 12 }} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ fontSize: 16, fontWeight: 'bold' }}
            >
              {name}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 16, color: 'rgba(0,0,0,0.2)' }}>
              Nguyen Huy Hoang: Nhan tin
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          {friend?.avatarUrl ? (
            <Avatar.Image size={50} source={{ uri: friend?.avatarUrl }} />
          ) : (
            <Avatar.Text size={50} label={friend?.fullName?.slice(0, 1)} />
          )}
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ fontSize: 16, fontWeight: 'bold' }}
            >
              {friend?.fullName}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 16, color: 'rgba(0,0,0,0.2)' }}>
              Nguyen Huy Hoang: Nhan tin
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default MessageCover;
