import { Pressable, Text, TextInput, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';

const AddFriend = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 15, width: '100%' }}>
      <View
        style={{
          paddingVertical: 10,
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
        />
        <Pressable style={{ marginLeft: 5 }}>
          <Text style={{ color: '#0091ff', fontSize: 14 }}>Tìm kiếm</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}
        >
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center', marginRight: 'auto' }}
            onPress={() => navigation.navigate('InforProfile')}
          >
            <Avatar.Image size={50} source={ImgUser} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
              Nguyen Huy Hoang
            </Text>
          </Pressable>
          <Text style={{ color: '#0091ff', fontSize: 14 }}>Gửi lời mời</Text>
        </View>
      </View>
    </View>
  );
};

export default AddFriend;
