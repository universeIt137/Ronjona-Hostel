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

    const { data: privacy = {} } = useQuery({
        queryKey: ['privacy'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getPrivacyById/67824da47808254309f86a12');
            return res.data.data;
        }
    })

    useEffect(() => {
        setTinyDescription(privacy.desc)
    }, [privacy])

    console.log(tinyDescription);


    const handleDescriptionChange = (value) => {
        setTinyDescription(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            desc: tinyDescription
        };

        // console.log(payload);

        // console.log('Package Data:', packageData);

        // Submit data to the server or process it as needed
        axiosPublic.put('/updatePrivacy/67824da47808254309f86a12', payload)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your privacy has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Feature</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-6">Add Privacy</h2>
            <form onSubmit={handleSubmit}>

                {/* Description */}
                <div className="p-2 w-full mb-10 h-full">
                    <div className="relative">

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
    );
};

export default AddPrivacy;