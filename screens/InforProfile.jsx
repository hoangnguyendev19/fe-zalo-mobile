import { ImageBackground, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import background from '../assets/images/img-banner-1.png';
import avt from '../assets/images/img-user.png';
import LineInfor from '../components/LineInfor';
import { useEffect, useState } from 'react';
import UserAPI from '../api/UserAPI';
import { convertToDate } from '../utils';

const InforProfile = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserAPI.getUserById(userId);
      if (data) {
        setUser(data);
      }
    };
    fetchData();
  }, [userId]);

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
              label={user?.fullName?.slice(0, 1)}
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
    </View>
  );
};

export default InforProfile;
