import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';

const MessageSender = () => {
  return (
    <View
      style={{
        width: 200,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 10,
        flex: 1,
        marginBottom: 20,
      }}
    >
      <Text>Hello, my name is Hoang!</Text>
      <Text style={{ color: 'rgba(0,0,0,0.2)', fontSize: 12 }}>16:40</Text>
    </View>
  );
};

export default MessageSender;
