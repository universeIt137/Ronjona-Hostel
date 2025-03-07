import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react';
import { useQuery } from '@tanstack/react-query';

const AddPrivacy = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const [tinyDescription, setTinyDescription] = useState('');

    // Fetch privacy data
    const { data: privacy = {}, refetch } = useQuery({
        queryKey: ['privacy'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getPrivacyById');
            console.log(res.data.data)
            return res.data.data[0];
        },
    });

    // Set default value for TinyMCE editor
    useEffect(() => {
        if (privacy?.desc) {
            setTinyDescription(privacy.desc);
        }
    }, [privacy]);

    const handleDescriptionChange = (value) => {
        setTinyDescription(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = { desc: tinyDescription };

        try {
            const response = await axiosPublic.put(`/privacy-upload`, payload);
            if (response) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your privacy has been updated successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch(); // Fetch updated data
            }
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.message || 'Failed to update privacy',
                showConfirmButton: false,
                timer: 1500,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Privacy</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">Add Privacy</h2>
            <form onSubmit={handleSubmit}>
                {/* Description */}
                <div className="p-2 w-full mb-10 h-full">
                    <div className="p-2 w-full mb-10 h-full">
                        <div className="relative">
                            <Editor
                                apiKey="atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm"
                                init={{
                                    height: 500,
                                    toolbar:
                                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align lineheight | bullist numlist | removeformat',
                                }}
                                value={tinyDescription}
                                onEditorChange={handleDescriptionChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className={`mt-4 text-white bg-blue-500 px-6 py-2 rounded hover:bg-green-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''
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

export default AddPrivacy;
