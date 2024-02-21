import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.7:5000/api/v1/conversations',
  headers: { 'Content-Type': 'application/json' },
});

const getAllConversationForUser = async (token) => {
  try {
    const { data } = await axiosInstance.get('', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const createConversation = async (conversation, token) => {
  try {
    const { data } = await axiosInstance.post('/', conversation, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const removeUserForConversation = async (userId, conversationId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/${conversationId}/remove-user`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const addUserForConversation = async (userId, conversationId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/${conversationId}/add-user`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const removeYourselfForConversation = async (conversationId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/${conversationId}/remove-yourself`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const assignAdminForConversation = async (userId, conversationId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/${conversationId}/assign-admin`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteConversation = async (conversationId, token) => {
  try {
    const { data } = await axiosInstance.delete(`/${conversationId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const ConversationAPI = {
  getAllConversationForUser,
  createConversation,
  removeUserForConversation,
  addUserForConversation,
  removeYourselfForConversation,
  assignAdminForConversation,
  deleteConversation,
};

export default ConversationAPI;