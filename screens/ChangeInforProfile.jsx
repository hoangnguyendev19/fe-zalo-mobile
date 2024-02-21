import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ChangeInforProfile = ({ item }) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [imageUri, setImageUri] = useState(null); // Đường dẫn hình ảnh
  
    // Hàm để chọn ảnh từ thư viện hoặc máy ảnh
    const pickImage = () => {
      // TODO: Thêm mã để chọn ảnh từ thư viện hoặc máy ảnh
    };
  
    // Hàm để lưu thông tin người dùng đã chỉnh sửa
    const saveChanges = () => {
      // TODO: Thêm mã để lưu thông tin người dùng đã chỉnh sửa
    };
  
    return (
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
        }}>
          <TouchableOpacity onPress={pickImage} style={{
            alignItems: 'center',
            marginBottom: 20,
          }}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={{
                width: 150,
                height: 150,
                borderRadius: 75,
              }} />
            ) : (
              <Text style={{
                fontSize: 18,
                color: 'blue',
              }}>Chọn ảnh</Text>
            )}
          </TouchableOpacity>
          <View style={{
            marginBottom: 20,
          }}>
            <Text style={{
              fontSize: 18,
              marginBottom: 5,
            }}>Tên:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                fontSize: 16,
              }}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={{
            marginBottom: 20,
          }}>
            <Text style={{
              fontSize: 18,
              marginBottom: 5,
            }}>Ngày sinh:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                fontSize: 16,
              }}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>
          <View style={{
            marginBottom: 20,
          }}>
            <Text style={{
              fontSize: 18,
              marginBottom: 5,
            }}>Giới tính:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                padding: 10,
                fontSize: 16,
              }}
              value={gender}
              onChangeText={setGender}
            />
          </View>
          <Button title="Lưu thay đổi" onPress={saveChanges} />
        </ScrollView>
      );
    };

export default ChangeInforProfile;
