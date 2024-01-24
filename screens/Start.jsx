import { Image, Pressable, Text, View } from 'react-native';
import Logo from '../assets/images/logo.png';

const Start = ({ navigation }) => {
  return (
    <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
      <View style={{ marginTop: 100 }}>
        <Image source={Logo} style={{ width: 300, height: 100 }} />
      </View>
      <Pressable
        style={{
          marginTop: 'auto',
          paddingVertical: 15,
          width: '80%',
          backgroundColor: '#0091ff',
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate('login')}
      >
        <Text
          style={{ textAlign: 'center', fontSize: 20, color: '#fff', textTransform: 'uppercase' }}
        >
          Đăng nhập
        </Text>
      </Pressable>
      <Pressable
        style={{
          marginTop: 20,
          paddingVertical: 15,
          width: '80%',
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate('signup')}
      >
        <Text
          style={{ textAlign: 'center', fontSize: 20, color: '#000', textTransform: 'uppercase' }}
        >
          Đăng ký
        </Text>
      </Pressable>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 'auto',
          marginBottom: 30,
        }}
      >
        Tiếng Việt
      </Text>
    </View>
  );
};

export default Start;
