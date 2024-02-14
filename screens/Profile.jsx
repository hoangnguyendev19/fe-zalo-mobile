import { ImageBackground, Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import background from '../assets/images/img-banner-1.png';
import avt from '../assets/images/img-user.png';
import LineInfor from '../components/LineInfor';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import UserAPI from '../api/UserAPI';
import { convertToDate } from '../utils';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = async () => {
    console.log('logout');
    await UserAPI.logout();
    navigation.navigate('Start');
    dispatch(logout());
  };

  const handleUpdatePwd = () => {
    console.log('Update password');
  };

  const handleUpdateInfor = () => {
    console.log('Update infor');
  };

  const itemsInfor = [
    {
      title: <Text style={{ fontWeight: 500 }}>Giới Tính</Text>,
      content: <Text>{user?.gender ? 'Nam' : 'Nữ'}</Text>,
    },
    {
      title: <Text style={{ fontWeight: 500 }}>Ngày sinh</Text>,
      content: <Text>{convertToDate(user?.dateOfBirth)}</Text>,
    },
  ];
  const itemsChange = [
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <EvilIcons name="pencil" size={35} color="black" />
        </View>
      ),
      content: <Text>Đổi thông tin</Text>,
      action: handleUpdateInfor,
    },
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <EvilIcons name="lock" size={35} color="black" />
        </View>
      ),
      content: <Text>Đổi mật khẩu</Text>,
      action: handleUpdatePwd,
    },
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Entypo name="log-out" size={24} color="red" />
        </View>
      ),
      content: <Text style={{ color: 'red' }}>Đăng xuất</Text>,
      action: handleLogout,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: undefined, backgroundColor: 'white', marginBottom: 3 }}>
        <ImageBackground
          source={background}
          style={{
            width: '100%',
            height: 200,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          {user?.avatar ? (
            <Avatar.Image
              size={80}
              source={user?.avatar}
              style={{
                position: 'absolute',
                bottom: -30,
                left: '50%',
                transform: [{ translateX: -35 }],
              }}
            />
          ) : (
            <Avatar.Text
              size={80}
              label={user?.fullName.slice(0, 1)}
              style={{
                position: 'absolute',
                bottom: -30,
                left: '50%',
                transform: [{ translateX: -35 }],
              }}
            />
          )}
        </ImageBackground>
        <View style={{ marginTop: 40, marginHorizontal: 8 }}>
          <View style={{ marginBottom: 6, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>{user?.fullName}</Text>
          </View>

          {itemsInfor.map((item, index) => {
            return <LineInfor key={index} item={item} />;
          })}
        </View>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 4, backgroundColor: 'white' }}>
        {itemsChange.map((item, index) => {
          return (
            <Pressable key={index} onPress={item.action}>
              <LineInfor item={item} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Profile;
