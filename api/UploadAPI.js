import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.8:5000/api/v1/uploads',
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
