import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';

const MessageReceiver = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <Avatar.Image size={30} source={ImgUser} />
      <View
        style={{
          width: 200,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          backgroundColor: '#fff',
          marginLeft: 10,
        }}
      >
        <Text>Hello, my name is Hoang!</Text>
        <Text style={{ color: 'rgba(0,0,0,0.2)', fontSize: 12 }}>16:40</Text>
      </View>
    </View>
  );
};

export default MessageReceiver;
