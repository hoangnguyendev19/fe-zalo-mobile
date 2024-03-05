import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/uploads`,
  headers: { 'Content-Type': 'multipart/form-data' },
});

const uploadFile = async (file) => {
  try {
    const { data } = await axiosInstance.post('/upload-file', file);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const UploadAPI = { uploadFile };

export default UploadAPI;
