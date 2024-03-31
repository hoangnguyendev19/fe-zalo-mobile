import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Avatar, Menu } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import ConversationAPI from '../api/ConversationAPI';
import { removeUser, assignAdmin } from '../redux/conversationSlice';

const Member = ({ navigation, mem, conversation, setShow, setErr }) => {
  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAssignAdmin = async (id) => {
    const data = await ConversationAPI.assignAdminForConversation(id, conversation.id);
    if (data) {
      dispatch(assignAdmin({ conversationId: conversation.id, userId: id }));
      navigation.navigate('Chat', { conversationId: conversation.id, name: conversation.name });
    }
  };

  const handleRemoveUser = async (id) => {
    if (conversation?.admin !== user?.id) {
      return;
    }

    if (conversation.members.length === 3) {
      setVisible(false);
      setErr('Nhóm phải có ít nhất 3 người!');
      setShow(true);
      return;
    }
    const data = await ConversationAPI.removeUserForConversation(id, conversation.id);
    if (data) {
      dispatch(removeUser({ conversationId: conversation.id, userId: id }));
      navigation.navigate('Chat', { conversationId: conversation.id, name: conversation.name });
    }
  };

  return (
    <View
      key={mem.id}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <Pressable
        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 'auto' }}
        onPress={() => navigation.navigate('InforProfile', { userId: mem.id })}
      >
        {mem.avatarUrl ? (
          <Avatar.Image size={50} source={{ uri: mem.avatarUrl }} />
        ) : (
          <Avatar.Text size={50} label={mem.fullName.slice(0, 1)} />
        )}
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>{mem.fullName}</Text>
      </Pressable>

      {mem.id === conversation?.admin && <FontAwesome5 name="crown" size={24} color="black" />}
      {mem.id !== conversation?.admin && user?.id === conversation?.admin && (
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchorPosition="bottom"
          style={{ paddingLeft: 10, paddingTop: 10 }}
          anchor={
            <Pressable style={{}} onPress={() => setVisible(true)}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </Pressable>
          }
        >
          <Menu.Item
            onPress={() => handleAssignAdmin(mem.id)}
            title="Trao quyền"
            leadingIcon="crown"
            titleStyle={{ fontSize: 14 }}
          />
          <Menu.Item
            onPress={() => handleRemoveUser(mem.id)}
            title="Xoá khỏi nhóm"
            leadingIcon="delete"
            titleStyle={{ fontSize: 14 }}
          />
        </Menu>
      )}
    </View>
  );
};

export default Member;
