import { Link } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import UserAPI from '../api/UserAPI';
import { signup } from '../redux/userSlice';

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');

  const handleSignup = async () => {
    if (fullName.trim() === '') {
      setErr('Bạn chưa nhập họ và tên!');
      setVisible(true);
      return;
    }

    if (phoneNumber.trim() === '') {
      setErr('Bạn chưa nhập só điện thoại!');
      setVisible(true);
      return;
    }

    if (phoneNumber.length !== 10) {
      setErr('Số điện thoại có 10 chữ số!');
      setVisible(true);
      return;
    }

    if (password.trim() === '') {
      setErr('Bạn chưa nhập mật khẩu!');
      setVisible(true);
      return;
    }

    if (password.length < 10) {
      setErr('Mật khẩu có ít nhất 10 ký tự!');
      setVisible(true);
      return;
    }

    if (password !== rePassword) {
      setErr('Mật khẩu nhập lại không khớp với mật khẩu!');
      setVisible(true);
      return;
    }

    const data = await UserAPI.signup(fullName, phoneNumber, password);
    if (data) {
      dispatch(signup(data));
      setFullName('');
      setPhoneNumber('');
      setPassword('');
      setRePassword('');
      navigation.navigate('Main');
    } else {
      setErr('Số điện thoại đã tồn tại!');
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
        <Text style={{ fontSize: 12 }}>
          Vui lòng nhập họ và tên, số điện thoại và mật khẩu để đăng ký
        </Text>
      </View>
      <TextInput
        placeholder="Họ và tên"
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 16,
          marginTop: 20,
        }}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        placeholder="Số điện thoại"
        placeholderTextColor="rgba(0,0,0,0.5)"
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 15,
          fontSize: 16,
          marginTop: 20,
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
      <TextInput
        placeholder="Nhập lại mật khẩu"
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
        value={rePassword}
        onChangeText={(text) => setRePassword(text)}
      />
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Pressable
          style={{
            marginTop: 40,
            paddingVertical: 15,
            width: '80%',
            backgroundColor: '#0091ff',
            borderRadius: 30,
          }}
          onPress={handleSignup}
        >
          <Text
            style={{ textAlign: 'center', fontSize: 16, color: '#fff', textTransform: 'uppercase' }}
          >
            Đăng ký
          </Text>
        </Pressable>
      </View>
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

export default Signup;
