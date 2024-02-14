import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import ImgUser from '../assets/images/img-user.png';

const ContactCover = ({ navigation, friend }) => {
  const { fullName, avatarUrl, id } = friend;

  return (
    <View
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
        onPress={() => navigation.navigate('InforProfile', { userId: id })}
      >
        {avatarUrl ? (
          <Avatar.Image size={50} source={avatarUrl} />
        ) : (
          <Avatar.Text size={50} label={fullName.slice(0, 1)} />
        )}
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>{fullName}</Text>
      </Pressable>
      <Pressable>
        <Feather name="phone" size={24} color="black" />
      </Pressable>
      <Pressable style={{ marginLeft: 25 }}>
        <Feather name="video" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default ContactCover;
