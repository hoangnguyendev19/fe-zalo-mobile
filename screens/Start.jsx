import { Image, Pressable, Text, TextBase, View } from 'react-native';
import Logo from '../assets/images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import TokenAPI from '../api/TokenAPI';
import { useEffect } from 'react';

const Start = ({ navigation }) => {
  useEffect(() => {
    if (TokenAPI.getAccessToken() && TokenAPI.getRefreshToken()) {
      navigation.navigate('Main');
    }
  }, []);

  return (
    <SafeAreaView style={{ width: '100%', alignItems: 'center', flex: 1 }}>
      <View style={{ marginTop: 100 }}>
        <Image source={Logo} width={100} height={100} />
      </View>
      <Pressable
        style={{
          marginTop: 'auto',
          paddingVertical: 15,
          width: '80%',
          backgroundColor: '#0091ff',
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate('Login')}
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
        onPress={() => navigation.navigate('Signup')}
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
          marginBottom: 50,
        }}
      >
        Tiếng Việt
      </Text>
    </SafeAreaView>
  );
};

export default Start;
