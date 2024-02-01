import { Link } from '@react-navigation/native';
import { Text, View, TextInput, Pressable } from 'react-native';

const ForgotPassword = ({ navigation }) => {
    const handleSubmit = () => {
        navigation.navigate('/');
    };
    return (
        <View style={{ width: '100%', flex: 1 }}>
            <View
                style={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'rgba(0,0,0,0.1)' }}
            >
                <Text style={{ fontSize: 15 }}>Nhập số điện thoại để lấy lại mật khẩu</Text>
            </View>
            <TextInput
                placeholder="Số điện thoại"
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={{
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderStyle: 'solid',
                    marginHorizontal: 15,
                    fontSize: 18,
                    marginTop: 20,
                }}
            />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>

                <Pressable
                    style={{
                        marginTop: 50,
                        paddingVertical: 15,
                        width: '80%',
                        backgroundColor: '#0091ff',
                        borderRadius: 30,
                        marginHorizontal: 'auto',
                    }}
                    onPress={handleSubmit}
                >
                    <Text
                        style={{ textAlign: 'center', fontSize: 20, color: '#fff', textTransform: 'uppercase' }}
                    >
                        Tiếp tục
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default ForgotPassword;
