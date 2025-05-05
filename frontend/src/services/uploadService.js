import api from './api';

// Create axios instance for upload API calls
const uploadApi = api.createAxiosInstance('upload');

const uploadService = {
  // Get a pre-signed URL for CV uploads
  getUploadUrl: async (fileType) => {
    try {
      const response = await uploadApi.post('/cv', { file_type: fileType });
      return response.data;
    } catch (error) {
      return api.handleApiError(error);
    }
  }
};

export default uploadService; 