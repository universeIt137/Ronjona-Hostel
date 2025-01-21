import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

function PackagesUpdate() {
    const axiosPublic = useAxiosPublic();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [video, setVideo] = useState('');
    const [desc, setDesc] = useState('');
    const [features, setFeatures] = useState([{ featilityTitle: '', featilityImg: '' }]);
    const [images, setImages] = useState([]);
    const [uploadedImgUrls, setUploadedImgUrls] = useState([]);
    const [loading, setLoading] = useState(false);


    const { data: packages = [], isLoading, refetch } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            return res.data.data;
        }
    })

    const { data: branches = [] } = useQuery({
        queryKey: ['branches'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllBranches', config);
            return res.data.data;
        }
    })

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/your-cloud-name/image/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'your-upload-preset';

    // Function to upload image to Cloudinary
    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, formData);
            return response.data.secure_url; // Return the URL of the uploaded image
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    const handleFeatureChange = (index, field, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index][field] = value;
        setFeatures(updatedFeatures);
    };

    const addFeature = () => {
        setFeatures([...features, { featilityTitle: '', featilityImg: '' }]);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        setImages(files); // Store the selected files for uploading
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Upload images to Cloudinary
        const uploadedImages = await Promise.all(
            Array.from(images).map((file) => uploadImageToCloudinary(file))
        );
        setUploadedImgUrls(uploadedImages); // Store uploaded image URLs

        // Prepare the payload for the API request
        const payload = {
            title,
            price,
            video,
            desc,
            features,
            img: uploadedImgUrls, // The uploaded image URLs
        };

        // Replace this with your actual backend API URL
        const API_URL = 'https://your-backend-api.com/updatePackage';

        try {
            const response = await axios.put(API_URL, payload);
            if (response.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Package updated successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Reset form
                setTitle('');
                setPrice('');
                setVideo('');
                setDesc('');
                setFeatures([{ featilityTitle: '', featilityImg: '' }]);
                setImages([]);
                setUploadedImgUrls([]);
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error updating the package!',
                showConfirmButton: false,
                timer: 1500,
            });
        }

        setLoading(false);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Update Package</h2>

            <form onSubmit={handleSubmit}>
                {/* Package Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Package Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Enter package title"
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-semibold text-gray-700">Price</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Enter package price"
                    />
                </div>

                {/* Video */}
                <div className="mb-4">
                    <label htmlFor="video" className="block text-sm font-semibold text-gray-700">Video URL</label>
                    <input
                        type="text"
                        id="video"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                        className="w-full p-2 mt-2 border rounded-md"
                        placeholder="Enter package video URL"
                    />
                </div>

                {/* Package Features */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Features</label>
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-4 mb-4">
                            <input
                                type="text"
                                value={feature.featilityTitle}
                                onChange={(e) => handleFeatureChange(index, 'featilityTitle', e.target.value)}
                                className="w-1/2 p-2 border rounded-md"
                                placeholder="Enter feature title"
                            />
                            <input
                                type="text"
                                value={feature.featilityImg}
                                onChange={(e) => handleFeatureChange(index, 'featilityImg', e.target.value)}
                                className="w-1/2 p-2 border rounded-md"
                                placeholder="Enter feature image URL"
                            />
                            <button
                                type="button"
                                onClick={() => removeFeature(index)}
                                className="px-2 py-1 bg-red-500 text-white rounded-md"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addFeature}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Add Feature
                    </button>
                </div>

                {/* Package Description */}
                <div className="mb-4">
                    <label htmlFor="desc" className="block text-sm font-semibold text-gray-700">Description</label>
                    <Editor
                        apiKey="your-tinymce-api-key"
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: ['link', 'image', 'media', 'lists'],
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | link image | bullist numlist',
                        }}
                        value={desc}
                        onEditorChange={(content) => setDesc(content)}
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-semibold text-gray-700">Upload Images</label>
                    <input
                        type="file"
                        id="images"
                        multiple
                        onChange={handleImageChange}
                        className="w-full p-2 mt-2 border rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className={`px-6 py-2 mt-4 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Updating...' : 'Update Package'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PackagesUpdate;
