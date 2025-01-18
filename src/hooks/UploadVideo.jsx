import axios from "axios";

export const UploadVideo = async (file) => {
    const cloudName = 'dxvacpgrv'
    const data = new FormData();
    data.append('file', file)
    data.append('upload_preset', 'AmerThikanaVideo')
    try {
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
        const res = await axios.post(api, data)

        const { secure_url } = res.data;
        return secure_url
    } catch (error) {
        console.log(error)
    }
}