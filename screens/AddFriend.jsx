import { Pressable, Text, TextInput, View } from 'react-native';
import { Avatar, Snackbar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';
import { useEffect, useState } from 'react';
import UserAPI from '../api/UserAPI';
import { setUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';

const AddFriend = ({ navigation }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [friend, setFriend] = useState(null);

  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');
  const [status, setStatus] = useState('request'); // request - revoke - accept - friend
  const { user, accessToken } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && friend) {
      if (user.friendList.filter((fri) => fri.id === friend.id).length > 0) {
        setStatus('friend');
        return;
      }

      if (user.sendedRequestList.filter((fri) => fri.id === friend.id).length > 0) {
        setStatus('revoke');
        return;
      }
      if (user.receivedRequestList.filter((fri) => fri.id === friend.id).length > 0) {
        setStatus('accept');
        return;
      }
      setStatus('request');
    }
  }, [friend, user]);

  const handleSearch = async () => {
    const data = await UserAPI.getUserByPhoneNumber(phoneNumber);
    if (data) {
      setFriend(data);
    } else {
      setErr('Không tìm thấy người dùng với số điện thoại này!');
      setVisible(true);
    }
  };

  const handleRequestFriend = async () => {
    const data = await UserAPI.requestFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus('revoke');
    } else {
      setErr('Gửi lời mời thất bại!');
      setVisible(true);
    }
  };

  const handleRevokeFriend = async () => {
    const data = await UserAPI.revokeFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus('request');
    } else {
      setErr('Thu hồi lời mời thất bại!');
      setVisible(true);
    }
  };

  const handleAcceptFriend = async () => {
    const data = await UserAPI.acceptFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus('friend');
    } else {
      setErr('Chấp nhận lời mời thất bại!');
      setVisible(true);
    }
  };

  const handleDeleteAcceptFriend = async () => {
    const data = await UserAPI.deleteAcceptFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus('request');
    } else {
      setErr('Xoá lời mời thất bại!');
      setVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderBottomColor: 'rgba(0,0,0,0.2)',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Nhập số điện thoại"
          placeholderTextColor="rgba(0,0,0,0.3)"
          style={{ width: '80%' }}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Pressable style={{ marginLeft: 5 }} onPress={handleSearch}>
          <Text style={{ color: '#0091ff', fontSize: 14 }}>Tìm kiếm</Text>
        </Pressable>
      </View>
      {friend && (
        // <View style={{ flexDirection: 'row' }}>
        <View
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
              <Avatar.Image size={40} source={friend.avatarUrl} />
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
          {status === 'revoke' && (
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                backgroundColor: 'rgba(0,0,0,0.1)',
              }}
              onPress={handleRevokeFriend}
            >
              <Text style={{ color: '#000', fontSize: 12 }}>Thu hồi</Text>
            </Pressable>
          )}
          {status === 'request' && (
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                backgroundColor: '#0091ff',
              }}
              onPress={handleRequestFriend}
            >
              <Text style={{ color: '#fff', fontSize: 12 }}>Gửi lời mời</Text>
            </Pressable>
          )}
          {status === 'accept' && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                  backgroundColor: '#0091ff',
                  marginRight: 5,
                }}
                onPress={handleAcceptFriend}
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
                onPress={handleDeleteAcceptFriend}
              >
                <Text style={{ color: '#000', fontSize: 12 }}>Xoá</Text>
              </Pressable>
            </View>
          )}

          {status === 'friend' && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable>
                <Feather name="phone" size={24} color="black" />
              </Pressable>
              <Pressable style={{ marginLeft: 25 }}>
                <Feather name="video" size={24} color="black" />
              </Pressable>
            </View>
          )}
        </View>
        // </View>
      )}
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

export default AddFriend;
