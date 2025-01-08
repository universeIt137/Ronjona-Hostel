import axios from "axios";

export const uploadImg = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "imageUpload"); // Your Cloudinary upload preset
  
    try {
      let api = `https://api.cloudinary.com/v1_1/dxvacpgrv/image/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return "";
    }
  };
  