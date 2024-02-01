import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HeaderOfPage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: '#129bfb' }}>
                <Appbar.BackAction color="white"  onPress={()=>navigation.goBack()}/>
                <Text style={styles.title}>
                    Đăng nhập
                </Text>
            </Appbar.Header>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight:'500'
    }
});
