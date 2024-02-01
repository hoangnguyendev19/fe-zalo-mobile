import { ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MessageCover from '../components/MessageCover';

const Group = () => {
  return (
    <View style={{ width: '100%', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: '#fff',
        }}
      >
        <AntDesign name="addusergroup" size={24} color="#0091ff" />
        <Text style={{ marginLeft: 10, fontSize: 16, color: '#0091ff' }}>Tạo nhóm mới</Text>
      </View>
      <ScrollView
        style={{
          borderTopWidth: 5,
          borderStyle: 'solid',
          borderColor: 'rgba(0,0,0,0.05)',
          maxHeight: 500,
        }}
      >
        <MessageCover />
        <MessageCover />
        <MessageCover />
        <MessageCover />
        <MessageCover />
        <MessageCover />
        <MessageCover />
        <MessageCover />
      </ScrollView>
    </View>
  );
};

export default Group;
