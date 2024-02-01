import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';

const MessageCover = () => {
  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <Avatar.Image size={50} source={ImgUser} />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 18, fontWeight: 'bold' }}>
          CNMOI_2024_DHKTPM16B
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 16, color: 'rgba(0,0,0,0.2)' }}>
          Nguyen Huy Hoang: Nhan tin
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageCover;
