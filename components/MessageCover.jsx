import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

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
      <Avatar.Image
        size={60}
        source="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 20, fontWeight: 'bold' }}>
          CNMOI_2024_DHKTPM16B
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 18, color: 'rgba(0,0,0,0.2)' }}>
          Nguyen Huy Hoang: Nhan tin
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageCover;
