import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import formatDateTime from '../../../hooks/useDateTime';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../hooks/UploadImage';
import { Editor } from '@tinymce/tinymce-react';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

const ManagePackage = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedPackage, setSelectedPackage] = useState();
    const [contents, setContents] = useState([{ featureTitle: '', featureDesc: '' }]);
    const [images, setImages] = useState([]); // Array to store uploaded image URLs
    const [uploadedImg, setUploadedImg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState();
    const [formData, setFormData] = useState({
        description: '',

    });
    const [tinyDescription, setTinyDescription] = useState('');

    const handleDescriptionChange = (value) => {
        setTinyDescription(value);
    };


    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };

    const { data: packages = [], isLoading,refetch } = useQuery({
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




    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/deletePackage/${id}`, config);
                    if (res.data.success) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "package has been deleted",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    } else {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: res.data.message || "Failed to save location",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                } catch (error) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: error.response?.data?.message || "An error occurred. Please try again.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });


    }

    const handleUpdateClick = (item) => {
        setSelectedPackage(item);
        setContents(item.features);
        setUploadedImg(item.img);
        setTinyDescription(item.desc);
        setId(item._id);
        document.getElementById('my_modal_1').showModal();
    };

    const addContent = () => {
        setContents([...contents, { featureTitle: '', featureDesc: '' }]);
    };

    const removeContent = (index) => {
        setContents(contents.filter((_, i) => i !== index));
    };

    const handleContentChange = (index, field, value) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, [field]: value } : content
        );
        setContents(updatedContents);
    };


    const handleImageChange = (e) => {
        setImages([...e.target.files]); // Set selected images
    };

    // Function to delete an image
    const removeImage = (index) => {
        const updatedImages = uploadedImg.filter((_, i) => i !== index); // Remove image from state
        setUploadedImg(updatedImages);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const branch = form.branch.value;
        const price = form.price.value;
        const video = form.video.value;

        setLoading(true);

        // Upload each image individually
        const updatedImages = await Promise.all(
            images.map(async (image) => await uploadImg(image))
        );

        setUploadedImg([...uploadedImg, ...updatedImages]);

        const payload = {
            title,
            branch,
            price,
            video,
            features: contents,
            img: uploadedImg,       
            desc: tinyDescription
        };

        console.log(id);


        // Submit data to the server or process it as needed
        axiosPublic.put(`/updatePackage/${id}`, payload)
            .then(res => {
                if (res) {
                    document.getElementById('my_modal_1').close();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your package has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    setSelectedPackage(null);
                    refetch();
                }
            })
            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

        setLoading(false);
    };

    if (isLoading) {
        return (
            <SkeletonLoader></SkeletonLoader>
        )
    }



    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Branch</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Manage Branch</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Title</th>
                                <th className="px-4 py-2 border">Location</th>
                                <th className="px-4 py-2 border">Location</th>
                                <th className="px-4 py-2 border">Created Date</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-xs text-center font-bold'>
                            {
                                packages?.map((item, index) => {
                                    const { date, time } = formatDateTime(item.createdAt);
                                    return (
                                        <tr key={item._id}>
                                            <td className='py-2 border'>{index + 1}</td>
                                            <td className='py-2 border'>{item.title}</td>
                                            <td className='py-2 border'>{item.branch?.location?.location}</td>
                                            <td className='py-2 border'>{item?.branch?.branch}</td>
                                            <td className='py-2 border'>{date}</td>
                                            <td className="px-4 py-2 border text-center">
                                                <button
                                                    onClick={() => handleUpdateClick(item)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for updating user role */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box" style={{ width: '80vw', maxWidth: '1200px' }}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">Updating Packages</h3>
                        <div className="">
                            <button
                                type="button"
                                className="btn bg-red-500 text-white"
                                onClick={() => document.getElementById('my_modal_1').close()}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {/* Title Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Update Package Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={selectedPackage?.title}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    placeholder="Enter Title"
                                    required
                                />
                            </div>

                            {/* Location input  */}
                            <div className="">
                                <label htmlFor="name" className=''>Update Branch</label>
                                <select name="branch" className="select select-bordered w-full mt-2">
                                    <option value={selectedPackage?.branch?._id} selected>{selectedPackage?.branch?.branch}</option>
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
                                    name='price'
                                    defaultValue={selectedPackage?.price}
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
                                    name='video'
                                    defaultValue={selectedPackage?.video}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    placeholder="Enter Video Url"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2">
                            {/* Feature content Section */}
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
                                            type="text"
                                            value={content?.featureDesc}
                                            onChange={(e) => handleContentChange(index, 'featureDesc', e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                            placeholder="Enter Feature Description"
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

                                {selectedPackage?.img && (
                                    <div className="">
                                        <div className=" rounded">
                                            <p>Already uploaded:</p>
                                            <div className="flex gap-2">
                                                {uploadedImg?.map((img, index) => (
                                                    <div key={index} className="border relative max-w-28 ">
                                                        <img
                                                            src={img}
                                                            alt={`preview-${index}`}
                                                            className="h-20 w-20 object-cover rounded "
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => removeImage(index)}
                                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
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
                                        max_height: 500,
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
                                    value={tinyDescription}
                                    onEditorChange={handleDescriptionChange} />
                            </div>

                        </div>



                        <div className="text-center">
                            <button
                                type="submit"
                                className={`mt-4  text-white bg-blue-500 px-6 py-2 rounded hover:bg-green-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Uploading...' : 'Submit'}
                            </button>
                        </div>
                    </form>

                </div>
            </dialog>


        </div>
    );
};

export default ManagePackage;