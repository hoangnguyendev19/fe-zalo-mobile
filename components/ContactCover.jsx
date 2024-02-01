import { Pressable, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import ImgUser from '../assets/images/img-user.png';

const ContactCover = () => {
  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <Avatar.Image size={50} source={ImgUser} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15, marginRight: 'auto' }}>
        Nguyen Huy Hoang
      </Text>
      <Feather name="phone" size={24} color="black" />
      <Feather name="video" size={24} color="black" style={{ marginLeft: 15 }} />
    </Pressable>
  );
};

export default ContactCover;
