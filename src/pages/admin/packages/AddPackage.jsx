import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { uploadImg } from '../../../hooks/UploadImage'; // Custom function for uploading images
import { Editor } from '@tinymce/tinymce-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AddPackage = () => {
    const [contents, setContents] = useState([{ featilityTitle: '', featilityImg: '' }]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ description: '' });
    const axiosPublic = useAxiosPublic();

    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: token } };

    const { data: branches = [] } = useQuery({
        queryKey: ['branches'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllBranches', config);
            return res.data.data;
        }
    });

    const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const handleContentChange = (index, field, value) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, [field]: value } : content
        );
        setContents(updatedContents);
    };

    const addContent = () => {
        setContents([...contents, { featilityTitle: '', featilityImg: '' }]);
    };

    const removeContent = (index) => {
        setContents(contents.filter((_, i) => i !== index));
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", "ronjonaImg"); // Replace with your Cloudinary upload preset
        formData.append('cloud_name', 'YOUR_CLOUD_NAME'); // Replace with your Cloudinary cloud name

        const response = await fetch(`https://api.cloudinary.com/v1_1/dxvacpgrv/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        return data.secure_url; // Returns the URL of the uploaded image
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const branch = form.branch.value;
        const price = form.price.value;
        const video = form.video.value;
        const locationLink = form.locationLink.value;

        setLoading(true);

        // Upload feature images
        const updatedContents = await Promise.all(
            contents.map(async (content) => {
                if (content.featilityImg instanceof File) {
                    const uploadedImgUrl = await uploadToCloudinary(content.featilityImg);
                    return { ...content, featilityImg: uploadedImgUrl };
                }
                return content;
            })
        );

        // Upload banner images
        const img = await Promise.all(
            images.map(async (image) => await uploadToCloudinary(image))
        );

        const payload = {
            title,
            branch,
            price,
            video,
            features: updatedContents,
            img,
            locationLink,
            desc: formData.description
        };

        axiosPublic.post('/createPackage', payload)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your package has been added',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            });

        setLoading(false);
    };

    return (
        <div className="mx-auto bg-white p-6 shadow-lg rounded-lg">
            <Helmet>
                <title>Dashboard | Add Feature</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">Add Packages</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Package Title</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Title"
                            required
                        />
                    </div>
                    <div className="">
                        <label>Select Branch</label>
                        <select name="branch" className="select select-bordered w-full mt-2">
                            <option disabled selected>Select Branch</option>
                            {branches?.map((item) => (
                                <option value={item._id} key={item._id}>
                                    {item?.branch}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Price</label>
                        <input
                            type="text"
                            name="price"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Price"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Location Url</label>
                        <input
                            type="text"
                            name="locationLink"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Location Url"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Video Url</label>
                        <input
                            type="text"
                            name="video"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Video Url"
                            required
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2 text-xl">Add Features</label>
                        {contents.map((content, index) => (
                            <div key={index} className="flex gap-4 mb-2">
                                <input
                                    type="text"
                                    value={content?.featilityTitle}
                                    onChange={(e) => handleContentChange(index, 'featilityTitle', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    placeholder="Enter Feature Title"
                                    required
                                />
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        handleContentChange(index, 'featilityImg', e.target.files[0])
                                    }
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    required
                                />
                                {contents.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeContent(index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addContent}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Content
                        </button>
                    </div>

                    <div className="p-2 w-full">
                        <label>Package Banner Images</label><br />
                        <input
                            type="file"
                            name="images"
                            multiple
                            onChange={handleImageChange}
                            className="file-input file-input-bordered file-input-md w-full"
                        />
                    </div>
                </div>

                <div className="p-2 w-full mb-10 h-full">
                    <label>Package Description</label>
                    <Editor
                        apiKey='atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm'
                        init={{
                            height: 500,
                            toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align lineheight | bullist numlist | removeformat',
                        }}
                        value={formData.description}
                        onEditorChange={handleDescriptionChange}
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className={`mt-4 text-white bg-blue-500 px-6 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPackage;
