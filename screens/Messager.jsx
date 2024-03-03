import { ScrollView } from 'react-native';
import MessageCover from '../components/MessageCover';
import { useSelector } from 'react-redux';

const Messager = ({ navigation }) => {
  const { conversations } = useSelector((state) => state.conversation);

  return (
    <ScrollView>
      {conversations.length > 0 &&
        conversations.map((conver) => (
          <MessageCover key={conver.id} navigation={navigation} conver={conver} />
        ))}
    </ScrollView>
  );
};

export default Messager;
