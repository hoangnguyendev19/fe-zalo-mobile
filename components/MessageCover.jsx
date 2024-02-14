import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import ImgUser from '../assets/images/img-user.png';
import { useSelector } from 'react-redux';

const MessageCover = ({ navigation, conver }) => {
  const { name, members, admin, type } = conver;
  const { user } = useSelector((state) => state.user);

  return (
    <Pressable onPress={() => navigation.navigate('Chat')}>
      {type === 'GROUP' ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <Avatar.Text size={50} label="GROUP" labelStyle={{ fontSize: 12 }} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ fontSize: 16, fontWeight: 'bold' }}
            >
              {name}
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 16, color: 'rgba(0,0,0,0.2)' }}>
              Nguyen Huy Hoang: Nhan tin
            </Text>
          </View>
        </View>
      ) : (
        <>
          {members.map((member) => {
            if (member.id !== user.id) {
              return (
                <View
                  key={member.id}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                  }}
                >
                  {member.avatarUrl ? (
                    <Avatar.Image size={50} source={member.avatarUrl} />
                  ) : (
                    <Avatar.Text size={50} label={member.fullName.slice(0, 1)} />
                  )}
                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={{ fontSize: 16, fontWeight: 'bold' }}
                    >
                      {member.fullName}
                    </Text>
                    <Text numberOfLines={1} style={{ fontSize: 16, color: 'rgba(0,0,0,0.2)' }}>
                      Nguyen Huy Hoang: Nhan tin
                    </Text>
                  </View>
                </View>
              );
            }
          })}
        </>
      )}
    </Pressable>
  );
};

export default MessageCover;
