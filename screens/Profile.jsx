import { ImageBackground, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import background from '../assets/images/img-banner-1.png';
import avt from '../assets/images/img-user.png';
// import LineInfor from '../components/LineInfor';
import { EvilIcons, Entypo } from '@expo/vector-icons';

const Profile = () => {
  const itemsInfor = [
    {
      title: <Text style={{ fontWeight: 500 }}>Giới Tính</Text>,
      content: <Text>Nam</Text>,
    },
    {
      title: <Text style={{ fontWeight: 500 }}>Ngày sinh</Text>,
      content: <Text>02/12/2003</Text>,
    },
    {
      title: <Text style={{ fontWeight: 500 }}>Email</Text>,
      content: <Text>tuong2003@gmail.com</Text>,
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
    },
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <EvilIcons name="lock" size={35} color="black" />
        </View>
      ),
      content: <Text>Đổi mật khẩu</Text>,
    },
    {
      title: (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Entypo name="log-out" size={24} color="red" />
        </View>
      ),
      content: <Text style={{ color: 'red' }}>Đăng xuất</Text>,
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
          <Avatar.Image
            size={80}
            source={avt}
            style={{
              position: 'absolute',
              bottom: -30,
              left: '50%',
              transform: [{ translateX: -35 }],
            }}
          />
        </ImageBackground>
        <View style={{ marginTop: 40, marginHorizontal: 8 }}>
          <View style={{ marginBottom: 6, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Tường chí</Text>
          </View>

          {/* {itemsInfor.map((item, index) => {
            return <LineInfor key={index} item={item} />
          })} */}
        </View>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 4, backgroundColor: 'white' }}>
        {/* {itemsChange.map((item, index) => {
          return <LineInfor key={index} item={item} />
        })} */}
      </View>
    </View>
  );
};

export default Profile;
