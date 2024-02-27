import {  Pressable, Text, View } from "react-native";
import avt from '../assets/images/img-user.png'
import { Avatar } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LineInfor from "../components/LineInfor";
const RightOfChat = ({ route, navigation }) => {
 
    const itemsChange = [
        {
          title: (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <FontAwesome6 name="calendar-days" size={24} color="black" />
            </View>
          ),
          content: <Text style={{ color: 'black' }}>Lịch nhóm</Text>,
        
        },
        {
            title: (
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                 <Feather name="users" size={24} color="black" />
              </View>
            ),
            content: <Text style={{ color: 'black' }}>Xem thành viên</Text>,
          
          },
          {
            title: (
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <AntDesign name="logout" size={24} color="red" />
              </View>
            ),
            content: <Text style={{ color: 'red' }}>Rời khỏi nhom</Text>,
          },
      ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
     <View style={{backgroundColor:'white', width:"100%",alignItems: 'center', justifyContent: 'flex-start' ,paddingTop:10}}>
        <Avatar.Image
                size={100}
                source={avt}
                style={{
                    marginBottom:10
                }}
            />
        <View style={{ marginHorizontal: 6, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>GR CNM</Text>
        </View>
        <View style={{marginVertical:5, justifyContent:'center', flexDirection:'row',width:'100%'}}>
            
            <View style={{ width: '20%', marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Pressable
                    style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 50,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}
                >
                    <AntDesign name="adduser" size={24} color="black" style={{ padding: 4 }} />
                </Pressable>
                <Text style={{ textAlign: 'center' }}>Thêm người dùng</Text>
            </View>
            <View style={{ width: '20%', marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Pressable
                    style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 50,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}
                >
                    <AntDesign name="adduser" size={24} color="black" style={{ padding: 4 }} />
                </Pressable>
                <Text style={{ textAlign: 'center' }}>Thêm người dùng</Text>
            </View>
            <View style={{ width: '20%', marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Pressable
                    style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 50,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}
                >
                    <AntDesign name="adduser" size={24} color="black" style={{ padding: 4 }} />
                </Pressable>
                <Text style={{ textAlign: 'center' }}>Thêm người dùng</Text>
            </View>
        </View>
     </View>
      <View style={{ marginTop: 30, marginHorizontal: 8, backgroundColor:'white' }}>
            {itemsChange.map((item, index) => (
            <Pressable key={index} onPress={item.action}>
              <LineInfor item={item} />
            </Pressable>
          ))}
      </View>
    </View>
  );
};

export default RightOfChat;
