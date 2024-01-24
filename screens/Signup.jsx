import { Link } from '@react-navigation/native';
import { Text, View, TextInput, Pressable } from 'react-native';

const Signup = ({ navigation }) => {
  const handleSignup = () => {
    // navigation.navigate('Signup');
  };

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <View
        style={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'rgba(0,0,0,0.1)' }}
      >
        <Text style={{ fontSize: 13 }}>
          Vui lòng nhập họ và tên, số điện thoại và mật khẩu để đăng ký
        </Text>
      </View>
      <TextInput
        placeholder="Họ và tên"
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
        placeholder="Số điện thoại"
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
      <TextInput
        placeholder="Nhập lại mật khẩu"
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
        onPress={handleSignup}
      >
        <Text
          style={{ textAlign: 'center', fontSize: 20, color: '#fff', textTransform: 'uppercase' }}
        >
          Đăng ký
        </Text>
      </Pressable>
    </View>
  );
};

export default Signup;
