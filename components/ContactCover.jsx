import { Pressable, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

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
      <Avatar.Image
        size={60}
        source="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 'auto' }}>
        Nguyen Huy Hoang
      </Text>
      <Feather name="phone" size={24} color="black" />
      <Feather name="video" size={24} color="black" style={{ marginLeft: 15 }} />
    </Pressable>
  );
};

export default ContactCover;
