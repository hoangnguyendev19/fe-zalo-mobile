import { Link } from '@react-navigation/native';
import { Text, View, TextInput, Pressable } from 'react-native';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <View
        style={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'rgba(0,0,0,0.1)' }}
      >
        <Text style={{ fontSize: 15 }}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
      </View>
      <TextInput
        placeholder="Số điện thoại"
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          outlineStyle: 'none',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 18,
          marginTop: 30,
        }}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry={true}
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          outlineStyle: 'none',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 18,
          marginTop: 20,
        }}
      />
      <Pressable
        style={{
          marginTop: 50,
          paddingVertical: 15,
          width: '80%',
          backgroundColor: '#0091ff',
          borderRadius: 30,
          marginHorizontal: 'auto',
        }}
        onPress={handleLogin}
      >
        <Text
          style={{ textAlign: 'center', fontSize: 20, color: '#fff', textTransform: 'uppercase' }}
        >
          Đăng nhập
        </Text>
      </Pressable>
      <Link
        to={{ screen: 'ForgotPassword' }}
        style={{
          marginHorizontal: 15,
          marginTop: 30,
          color: '#0091ff',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        Lấy lại mật khẩu
      </Link>
    </View>
  );
};

export default Login;
