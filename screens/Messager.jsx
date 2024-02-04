import { ScrollView } from 'react-native';
import MessageCover from '../components/MessageCover';

const Messager = ({ navigation }) => {
  return (
    <ScrollView>
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
      <MessageCover navigation={navigation} />
    </ScrollView>
  );
};

export default Messager;
