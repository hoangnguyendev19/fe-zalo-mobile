import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sender from './Sender';
import Receiver from './Receiver';

const Tab = createMaterialTopTabNavigator();

const RequestFriend = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Sender"
          options={{ title: 'Đã gửi', tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' } }}
          component={Sender}
        />
        <Tab.Screen
          name="Receiver"
          options={{ title: 'Đã nhận', tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' } }}
          component={Receiver}
        />
      </Tab.Navigator>
    </View>
  );
};

export default RequestFriend;
