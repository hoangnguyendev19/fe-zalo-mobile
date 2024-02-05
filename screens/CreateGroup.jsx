import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Avatar, Checkbox } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';
import { useState } from 'react';

const CreateGroup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <View
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderBottomColor: 'rgba(0,0,0,0.2)',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}
      >
        <TextInput
          placeholder="Nhập số điện thoại"
          placeholderTextColor="rgba(0,0,0,0.3)"
          style={{ width: '80%' }}
        />
        <Pressable style={{ marginLeft: 5 }}>
          <Text style={{ color: '#0091ff', fontSize: 14 }}>Tìm kiếm</Text>
        </Pressable>
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}
            >
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 60 }}
                onPress={() => {
                  setChecked(!checked);
                }}
              >
                <Avatar.Image size={50} source={ImgUser} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                  Nguyen Huy Hoang
                </Text>
              </Pressable>
              <Checkbox
                color="#0091ff"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          marginTop: 'auto',
          borderTopWidth: 1,
          borderStyle: 'solid',
          borderTopColor: 'rgba(0,0,0,0.2)',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Nhập tên nhóm"
          placeholderTextColor="rgba(0,0,0,0.3)"
          style={{ width: '90%' }}
        />
        <Pressable style={{ marginLeft: 5 }}>
          <Text style={{ color: '#0091ff', fontSize: 14 }}>Tạo</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateGroup;
