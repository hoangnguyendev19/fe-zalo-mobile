import {  Text, View } from 'react-native';

const Chat = ({item}) => {
    return (
        <View
            style={{
                height: 50, width: '100%', flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center',
                borderTopWidth:1,
                borderColor:'#e1dfd5'
            }}>
            <Text>Tuong</Text>
        </View>
    );
};

export default Chat;
