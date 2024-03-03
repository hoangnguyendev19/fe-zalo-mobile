import { ScrollView, View } from 'react-native';
import Member from '../components/Member';
import { useState } from 'react';
import { Snackbar } from 'react-native-paper';

const GroupMember = ({ navigation, route }) => {
  const { conversation } = route.params;
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {conversation?.members?.length > 0 &&
          conversation?.members?.map((mem) => (
            <Member
              key={mem.id}
              navigation={navigation}
              mem={mem}
              conversation={conversation}
              setShow={setShow}
              setErr={setErr}
            />
          ))}
      </ScrollView>
      <Snackbar
        visible={show}
        onDismiss={() => setShow(false)}
        action={{
          label: 'OK',
          onPress: () => {
            setShow(false);
          },
        }}
      >
        {err}
      </Snackbar>
    </View>
  );
};

export default GroupMember;
