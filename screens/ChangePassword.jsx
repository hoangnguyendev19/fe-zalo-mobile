import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const ChangePassword = ({ item }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = () => {
    // Kiểm tra mật khẩu hiện tại
    if (currentPassword !== 'password123') {
      setErrorMessage('Mật khẩu hiện tại không đúng');
      return;
    }

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
      setErrorMessage('Mật khẩu mới và xác nhận mật khẩu không khớp');
      return;
    }

    // Thực hiện hành động thay đổi mật khẩu, ví dụ: gửi yêu cầu đến API

    // Reset các trường nhập liệu và thông báo lỗi
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    alert('Mật khẩu đã được thay đổi thành công!');
  };

  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 20,
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>Thay đổi mật khẩu</Text>
      {errorMessage ? <Text style={{
        color: 'red',
        marginBottom: 15,
      }}>{errorMessage}</Text> : null}
      <TextInput
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
        }}
        placeholder="Mật khẩu hiện tại"
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
        }}
        placeholder="Mật khẩu mới"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
        }}
        placeholder="Xác nhận mật khẩu mới"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Thay đổi mật khẩu" onPress={handleChangePassword} />
    </ScrollView>
  );
};

export default ChangePassword;
