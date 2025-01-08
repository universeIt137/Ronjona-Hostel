import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";




const AddLocation = () => {
    const axiosPublic = useAxiosPublic();

    const { data: content = [], refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/csr');
            return res.data;
        }
    })




    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const chairman_name = form.chairman_name.value;
        const chairmanSpeech = form.description.value;
        const youtubeVideos = form.youtubeVideos.value;

        const image = form.image.files[0];
        const selectedVideo = form.video.files[0];




        let chairmanImageUrl = ''
        if (!image?.name) {
            chairmanImageUrl = ''
        } else {
            chairmanImageUrl = await uploadImg(image);

        }

        let videoUrl = '';
        if (selectedVideo) {
            videoUrl = await uploadVide(selectedVideo);
        }



        setLoading(true);

        // Simulate form submission
        try {
            const data = { chairman_name, chairmanSpeech, chairmanImageUrl, youtubeVideos, videoUrl }

            console.log(data);
            axiosPublic.post(`/chairman`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Data has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Manage Chairman</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Chairman's Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Chairman's Name</label>
                        <input type="text" name="chairman_name" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Youtube video</label>
                        <input type="text" name="youtubeVideos" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Chairman's Picture</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>


                    </div>

                    {/* Video */}
                    <div className=" w-full ">
                        <div className="relative">
                            <p>Upload Chairman's Video</p>
                            <input type="file" name='video' accept="video/*" className="file-input file-input-bordered file-input-md w-full" />
                        </div>

                    </div>

                </div>

                <div>
                    <label htmlFor="">Chairman's speech</label>
                    <textarea rows={6} name="description" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>

            
        </div>
    );
};

export default AddLocation;
