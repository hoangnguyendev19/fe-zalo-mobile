import { Link } from '@react-navigation/native';
import { Text, View, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import UserAPI from '../api/UserAPI';
import { Snackbar } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('0123456789');
  const [password, setPassword] = useState('huynguyen@123');
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');

  const handleLogin = async () => {
    if (phoneNumber === '') {
      setErr('Bạn chưa nhập số điện thoại!');
      setVisible(true);
      return;
    }
    if (phoneNumber.length !== 10) {
      setErr('Số điện thoại có 10 chữ số!');
      setVisible(true);
      return;
    }

    if (password === '') {
      setErr('Bạn chưa nhập mật khẩu!');
      setVisible(true);
      return;
    }

    if (password.length < 10) {
      setErr('Mật khẩu có ít nhất 10 ký tự!');
      setVisible(true);
      return;
    }

    const data = await UserAPI.login(phoneNumber, password);

    if (data) {
      dispatch(login(data));
      setPhoneNumber('');
      setPassword('');
      navigation.navigate('Main');
    } else {
      setErr('Số điện thoại hoặc mật khẩu không chính xác!');
      setVisible(true);
    }
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
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry={true}
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 16,
          marginTop: 20,
        }}
        value={password}
        onChangeText={(text) => setPassword(text)}
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
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'OK',
          onPress: () => {
            setVisible(false);
          },
        }}
      >
        {err}
      </Snackbar>
    </SafeAreaView>
  );
};

export default Login;
