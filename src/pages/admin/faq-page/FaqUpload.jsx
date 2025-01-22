import { useState } from "react";
import { uploadImg } from "../../../hooks/UploadImage";
import { createAlert } from "../../../helper/createAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FaqUpload = () => {
  const axiosPublic = useAxiosPublic()
  window.scrollTo(0, 0)
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const logo = e.target.logo.files[0];
    const questions = e.target.questions.value;
    const answer = e.target.answer.value;
    let imgUrl = '';
    if (!logo?.name) {
      imgUrl = ""
    }
    imgUrl = await uploadImg(logo);
    const payload = {
      questions, answer, logo: imgUrl
    };
    console.log(payload);
    const resp = await createAlert();
    try {
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.post(`/faq`, payload);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data upload successfully",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset()
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data upload fail",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
        <Helmet>
          <title>Dashboard | Faq Upload Page</title>
        </Helmet>
        <h1 className="text-3xl font-bold text-center mb-6">FAQ Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="logo" className="block text-lg font-semibold mb-2">
              Logo URL
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              className="w-full  border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="questions" className="block text-lg font-semibold mb-2">
              Question
            </label>
            <input
              type="text"
              id="questions"
              name="questions"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="answer" className="block text-lg font-semibold mb-2">
              Answer
            </label>
            <textarea
              id="answer"
              name="answer"
              rows="8"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3F83F8] text-white py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          >
            {
              loading ? "Submiting...." : "Submit"
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default FaqUpload
