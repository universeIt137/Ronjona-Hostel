import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../hooks/UploadImage';
import { Editor } from '@tinymce/tinymce-react';
import { useQuery } from '@tanstack/react-query';


const AddPackage = () => {
    const [heading, setHeading] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [featureName, setFeatureName] = useState('');
    const [contents, setContents] = useState([{ content_name: '' }]);
    const [videos, setVideos] = useState([{ videoUrl: '' }]);
    const [images, setImages] = useState([]); // Array to store uploaded image URLs
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    const [formData, setFormData] = useState({
        description: '',

    });

    const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };

    const { data: branches = [] } = useQuery({
        queryKey: ['branches'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllBranches', config);
            return res.data.data;
        }
    })



    // previous code 

    const handleContentChange = (index, field, value) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, [field]: value } : content
        );
        setContents(updatedContents);
    };

    const handleVideoChange = (index, field, value) => {
        const updatedVideos = videos.map((video, i) =>
            i === index ? { ...video, [field]: value } : video
        );
        setVideos(updatedVideos);
    };

    const addContent = () => {
        setContents([...contents, { content_name: '' }]);
    };

    const addVideo = () => {
        setVideos([...videos, { videoUrl: '' }]);
    };

    const removeContent = (index) => {
        setContents(contents.filter((_, i) => i !== index));
    };

    const removeVideo = (index) => {
        setVideos(videos.filter((_, i) => i !== index));
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]); // Set selected images
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Upload each image individually
        const imageUrls = await Promise.all(
            images.map(async (image) => await uploadImg(image))
        );

        const packageData = {
            heading,
            address,
            description,
            title,
            contents,
            featureName,
            images: imageUrls, // Array of image URLs
            videos
        };

        console.log('Package Data:', packageData);

        // Submit data to the server or process it as needed
        // axiosPublic.post('/package', packageData)
        //     .then(res => {
        //         if (res) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Your package has been added",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //     })
        //     .catch()

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
                    {/* Heading Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Package Title</label>
                        <input
                            type="text"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Title"
                            required
                        />
                    </div>

                    <div className="">
                        <label htmlFor="name" className=''>Select Branch</label>
                        <select name="location" className="select select-bordered w-full mt-2">
                            <option disabled selected>Select Location</option>
                            {
                                branches?.map(item =>
                                    <option value={item._id} key={item._id}>{item?.branch}</option>
                                )
                            }

                        </select>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-3">
                    {/* Price  */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Price</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Price"
                            required
                        />
                    </div>

                    {/* Video  */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Video Url</label>
                        <input
                            type="text"
                            value={featureName}
                            onChange={(e) => setFeatureName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter Video Url"
                            required
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2">
                    {/* Feature content Section */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2 text-xl">Feature Content</label>
                        {contents.map((content, index) => (
                            <div key={index} className="flex gap-4 mb-2">
                                <input
                                    type="text"
                                    value={content?.content_name}
                                    onChange={(e) => handleContentChange(index, 'content_name', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    placeholder="Enter Content Name"
                                    required
                                />

                                {contents.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeContent(index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addContent}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Add Content
                        </button>
                    </div>


                    {/* Multiple Image Upload */}
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600 font-bold">Package Banner Images</label><br />
                            <input
                                type="file"
                                name="images"
                                multiple // Allows selecting multiple images
                                onChange={handleImageChange}
                                className="file-input file-input-bordered file-input-md w-full"
                            />
                        </div>
                    </div>


                </div>


                {/* Description */}
                <div className="p-2 w-full mb-10 h-full">
                    <div className="relative">
                        <label className="leading-7 text-sm font-bold text-gray-600">Package Description</label>

                        <Editor
                            apiKey='atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm'
                            init={{
                                height: 500,
                                max_height: "500",
                                width: '100%',
                                border: "0px",
                                //    menubar: false,
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                // mergetags_list: [
                                //   { value: 'First.Name', title: 'First Name' },
                                //   { value: 'Email', title: 'Email' },
                                // ],
                                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                            }}
                            value={formData.description}
                            onEditorChange={handleDescriptionChange} />
                    </div>

                </div>



                <div className="text-center">
                    <button
                        type="submit"
                        className={`mt-4 bg-green-500 text-white bg-blue-500 px-6 py-2 rounded hover:bg-green-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
