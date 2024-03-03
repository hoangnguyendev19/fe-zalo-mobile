import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Avatar, Snackbar } from 'react-native-paper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConversationAPI from '../api/ConversationAPI';
import { addUser } from '../redux/conversationSlice';

const AddMember = ({ navigation, route }) => {
  const { user, accessToken } = useSelector((state) => state.user);
  const { conversation } = route.params;
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');

  const handleAddMember = async (id) => {
    const data = await ConversationAPI.addUserForConversation(id, conversation.id, accessToken);
    if (data) {
      dispatch(addUser({ conversationId: conversation.id, user: data }));
      navigation.navigate('Chat', { conversationId: conversation.id, name: conversation.name });
    } else {
      setErr('Thêm thành viên thất bại!');
      setVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {user &&
          user?.friendList?.map((friend) => {
            return (
              <View
                key={friend.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}
              >
                <Pressable
                  style={{ flexDirection: 'row', alignItems: 'center', marginRight: 'auto' }}
                  onPress={() => navigation.navigate('InforProfile', { userId: friend.id })}
                >
                  {friend.avatarUrl ? (
                    <Avatar.Image size={50} source={{ uri: friend.avatarUrl }} />
                  ) : (
                    <Avatar.Text size={50} label={friend.fullName.slice(0, 1)} />
                  )}
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                    {friend.fullName}
                  </Text>
                </Pressable>
                {!conversation?.members?.find((member) => member.id === friend.id) && (
                  <Pressable
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      backgroundColor: '#0091ff',
                      borderRadius: 10,
                    }}
                    onPress={() => handleAddMember(friend.id)}
                  >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Thêm</Text>
                  </Pressable>
                )}
              </View>
            );
          })}
      </ScrollView>
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

export default AddMember;
