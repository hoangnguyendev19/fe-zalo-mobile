import { Link } from '@react-navigation/native';
import { Text, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={{ width: '100%', flex: 1 }}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: 'rgba(0,0,0,0.1)',
          marginTop: -30,
        }}
      >
        <Text style={{ fontSize: 12 }}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
      </View>
      <TextInput
        placeholder="Số điện thoại"
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 16,
          marginTop: 30,
        }}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry={true}
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          // outlineStyle: 'none',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 16,
          marginTop: 20,
        }}
      />
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Pressable
          style={{
            marginTop: 50,
            paddingVertical: 15,
            width: '80%',
            backgroundColor: '#0091ff',
            borderRadius: 30,
          }}
          onPress={handleLogin}
        >
          <Text
            style={{ textAlign: 'center', fontSize: 16, color: '#fff', textTransform: 'uppercase' }}
          >
            Đăng nhập
          </Text>
        </Pressable>
      </View>
      <Link
        to={{ screen: 'ForgotPassword' }}
        style={{
          marginHorizontal: 15,
          marginTop: 30,
          color: '#0091ff',
          fontWeight: 'bold',
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        Lấy lại mật khẩu
      </Link>
    </SafeAreaView>
  );
};

export default Login;
