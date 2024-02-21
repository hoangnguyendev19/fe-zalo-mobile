import { ScrollView } from 'react-native';
import MessageCover from '../components/MessageCover';
import { useDispatch, useSelector } from 'react-redux';
import ConversationAPI from '../api/ConversationAPI';
import { useEffect } from 'react';
import { getAllConversations } from '../redux/conversationSlice';

const Messager = ({ navigation }) => {
  const dispatch = useDispatch();
  const { conversations } = useSelector((state) => state.conversation);
  const { accessToken } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ConversationAPI.getAllConversationForUser(accessToken);
      if (data) {
        dispatch(getAllConversations(data));
      }
    };

    fetchData();
  }, [dispatch, accessToken]);
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
