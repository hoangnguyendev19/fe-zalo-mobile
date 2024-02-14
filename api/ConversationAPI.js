import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.9:5000/api/v1/conversations',
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
    const res = await axiosInstance.post('/', conversation, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error('Create conversation failed');
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const removeUserForConversation = async (userId, conversationId, token) => {
  try {
    const res = await axiosInstance.put(
      `/${conversationId}/remove-user`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) {
      throw new Error('Remove user for this conversation failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const addUserForConversation = async (userId, conversationId, token) => {
  try {
    const res = await axiosInstance.put(
      `/${conversationId}/add-user`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) {
      throw new Error('Add user for this conversation failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const removeYourselfForConversation = async (conversationId, token) => {
  try {
    const res = await axiosInstance.put(
      `/${conversationId}/remove-yourself`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) {
      throw new Error('Remove yourself for this conversation failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const assignAdminForConversation = async (userId, conversationId, token) => {
  try {
    const res = await axiosInstance.put(
      `/${conversationId}/assign-admin`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) {
      throw new Error('Assign admin for this conversation failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const deleteConversation = async (conversationId, token) => {
  try {
    const res = await axiosInstance.delete(`/${conversationId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error('Delete this conversation failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
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
