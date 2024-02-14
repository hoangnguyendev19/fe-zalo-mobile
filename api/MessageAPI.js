import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.9:5000/api/v1/messages',
  headers: { 'Content-Type': 'application/json' },
});

const getAllMessageForConversation = async (conversationId, token) => {
  try {
    const res = await axiosInstance.get(`/${conversationId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error('Get all message for conversation failed');
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const createMessage = async (message, token) => {
  try {
    const res = await axiosInstance.post('/', message, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error('Create message failed');
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const revokeMessage = async (messageId, token) => {
  try {
    const res = await axiosInstance.put(
      `/${messageId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) {
      throw new Error('Revoke message failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const MessageAPI = { getAllMessageForConversation, createMessage, revokeMessage };
export default MessageAPI;
