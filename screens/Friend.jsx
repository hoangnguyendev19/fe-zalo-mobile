import { Pressable, ScrollView, Text, View } from 'react-native';
import { FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import ContactCover from '../components/ContactCover';

const Friend = ({ navigation }) => {
  return (
    <View style={{ width: '100%', flex: 1 }}>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#fff',
        }}
      >
        <FontAwesome5 name="users" size={24} color="#0091ff" />
        <Text style={{ marginLeft: 10, color: '#0091ff', fontSize: 16 }}>Lời mời kết bạn</Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#fff',
        }}
      >
        <AntDesign name="contacts" size={24} color="#0091ff" />
        <Text style={{ marginLeft: 15, color: '#0091ff', fontSize: 16 }}>Danh bạ máy</Text>
      </Pressable>
      <ScrollView
        style={{
          borderTopWidth: 5,
          borderStyle: 'solid',
          borderColor: 'rgba(0,0,0,0.05)',
          maxHeight: 500,
        }}
      >
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
        <ContactCover navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Friend;
