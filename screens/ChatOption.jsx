import { Pressable, Text, View } from 'react-native';
import { Avatar, Snackbar } from 'react-native-paper';
import { Feather, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import LineInfor from '../components/LineInfor';
import { useEffect, useState } from 'react';
import ConversationAPI from '../api/ConversationAPI';
import { useDispatch, useSelector } from 'react-redux';
import { deleteConversation, removeYourself } from '../redux/conversationSlice';
import { useNavigation } from '@react-navigation/native';

const ChatOption = ({ route, navigation }) => {
  const { conversationId } = route.params;
  const { user } = useSelector((state) => state.user);
  const [conversation, setConversation] = useState(null);
  const [friend, setFriend] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await ConversationAPI.getConversationById(conversationId);
      if (data) {
        if (data.type === 'FRIEND') {
          const fri = data.members.find((mem) => mem.id !== user.id);
          setFriend(fri);
        }
        setConversation(data);
      }
    };

    fetchData();
  }, [conversationId]);

  const handleDelConversation = async () => {
    if (conversation?.admin !== user?.id) {
      setErr('Bạn không phải là trưởng nhóm nên không thể xoá cuộc trò chuyện!');
      setVisible(true);
      return;
    }
    const data = await ConversationAPI.deleteConversation(conversationId);
    if (data) {
      dispatch(deleteConversation(conversationId));
      navigate.navigate('Main');
    }
  };

  const handleRemoveYourself = async () => {
    if (conversation.members.length === 3) {
      setErr('Nhóm phải có ít nhất 3 người!');
      setVisible(true);
      return;
    }

    if (conversation?.admin === user?.id) {
      setErr('Trước khi rời nhóm, bạn cần phải trao quyền cho người khác!');
      setVisible(true);
      return;
    }

    const data = await ConversationAPI.removeYourselfForConversation(conversationId);
    if (data) {
      dispatch(removeYourself(conversationId));
      navigate.navigate('Main');
    }
  };

  const itemsChangeFriend = [
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <MaterialIcons name="delete-outline" size={24} color="red" />
        </View>
      ),
      content: <Text style={{ color: 'red' }}>Xoá cuộc trò chuyện</Text>,
      action: handleDelConversation,
    },
  ];

  const itemsChangeGroup = [
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Feather name="users" size={24} color="black" />
        </View>
      ),
      content: (
        <Text style={{ color: 'black' }}>Xem thành viên ({conversation?.members?.length})</Text>
      ),
      action: () => navigation.navigate('GroupMember', { conversation }),
    },
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <AntDesign name="logout" size={24} color="red" />
        </View>
      ),
      content: <Text style={{ color: 'red' }}>Rời khỏi nhóm</Text>,
      action: handleRemoveYourself,
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 30,
        }}
      >
        {conversation?.type === 'FRIEND' ? (
          <>
            {friend?.avatarUrl ? (
              <Avatar.Image
                size={80}
                source={{ uri: friend?.avatarUrl }}
                style={{
                  marginBottom: 10,
                }}
              />
            ) : (
              <Avatar.Text
                size={80}
                label={friend?.fullName?.slice(0, 1)}
                style={{
                  marginBottom: 10,
                }}
              />
            )}

            <Text
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}
            >
              {friend?.fullName}
            </Text>
          </>
        ) : (
          <>
            <Avatar.Text
              size={80}
              label="GROUP"
              labelStyle={{ fontSize: 16 }}
              style={{
                marginBottom: 10,
              }}
            />

            <Text
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}
            >
              {conversation?.name}
            </Text>
          </>
        )}

        <View
          style={{
            marginVertical: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          {conversation?.type === 'FRIEND' ? (
            <View
              style={{
                width: '20%',
                marginRight: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Pressable
                style={{
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  borderRadius: 50,
                  height: 35,
                  width: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}
                onPress={() => navigation.navigate('InforProfile', { userId: friend.id })}
              >
                <AntDesign name="user" size={18} color="black" />
              </Pressable>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>Thông tin cá nhân</Text>
            </View>
          ) : (
            <View
              style={{
                width: '20%',
                marginRight: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Pressable
                style={{
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  borderRadius: 50,
                  height: 35,
                  width: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}
                onPress={() => navigation.navigate('AddMember', { conversation })}
              >
                <AntDesign name="adduser" size={18} color="black" />
              </Pressable>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>Thêm thành viên</Text>
            </View>
          )}
          <View
            style={{
              width: '20%',
              marginRight: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Pressable
              style={{
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 50,
                height: 35,
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
              }}
            >
              <Ionicons name="volume-mute-outline" size={18} color="black" style={{ padding: 4 }} />
            </Pressable>
            <Text style={{ textAlign: 'center', fontSize: 12 }}>Tắt thông báo</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 8, backgroundColor: 'white' }}>
        {conversation?.type === 'FRIEND' ? (
          itemsChangeFriend.map((item, index) => (
            <Pressable key={index} onPress={item.action}>
              <LineInfor item={item} />
            </Pressable>
          ))
        ) : (
          <>
            {itemsChangeGroup.map((item, index) => (
              <Pressable key={index} onPress={item.action}>
                <LineInfor item={item} />
              </Pressable>
            ))}
            {user?.id === conversation?.admin &&
              itemsChangeFriend.map((item, index) => (
                <Pressable key={index} onPress={item.action}>
                  <LineInfor item={item} />
                </Pressable>
              ))}
          </>
        )}
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'OK',
          onPress: () => {
            setVisible(false);
          },
        }}
      >
        {err}
      </Snackbar>
    </View>
  );
};

export default ChatOption;
