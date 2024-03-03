import { Pressable, Text, View } from 'react-native';
import { Avatar, Snackbar } from 'react-native-paper';
import { setUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import UserAPI from '../api/UserAPI';

const Receiver = ({ navigation }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');
  const { user, accessToken } = useSelector((state) => state.user);

  const handleAcceptFriend = async (id) => {
    const data = await UserAPI.acceptFriend(id, accessToken);
    if (data) {
      dispatch(setUser(data));
    } else {
      setErr('Chấp nhận lời mời thất bại!');
      setVisible(true);
    }
  };

  const handleDeleteAcceptFriend = async (id) => {
    const data = await UserAPI.deleteAcceptFriend(id, accessToken);
    if (data) {
      dispatch(setUser(data));
    } else {
      setErr('Xoá lời mời thất bại!');
      setVisible(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {user &&
        user?.receivedRequestList?.map((friend) => (
          <View
            key={friend.id}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}
          >
            <Pressable
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('InforProfile', { userId: friend.id })}
            >
              {friend.avatarUrl ? (
                <Avatar.Image size={40} source={{ uri: friend.avatarUrl }} />
              ) : (
                <Avatar.Text size={40} label={friend.fullName.slice(0, 1)} />
              )}
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  maxWidth: 140,
                }}
              >
                {friend.fullName}
              </Text>
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                  backgroundColor: '#0091ff',
                  marginRight: 5,
                }}
                onPress={() => handleAcceptFriend(friend.id)}
              >
                <Text style={{ color: '#fff', fontSize: 12 }}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                  backgroundColor: 'rgba(0,0,0,0.1)',
                }}
                onPress={() => handleDeleteAcceptFriend(friend.id)}
              >
                <Text style={{ color: '#000', fontSize: 12 }}>Xoá</Text>
              </Pressable>
            </View>
          </View>
        ))}
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

export default Receiver;
