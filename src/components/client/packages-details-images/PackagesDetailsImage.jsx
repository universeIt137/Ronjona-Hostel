import { useQuery } from "@tanstack/react-query";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const PackagesDetailsImage = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch data using useQuery
    const { data: imagesData = [], isLoading } = useQuery({
        queryKey: ['packageImages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            return res.data.data; // Adjust based on API response structure
        },
    });

    // Check if imagesData is available and has required data
    const images = imagesData.length > 0 && imagesData[0]?.img
        ? Object.keys(imagesData[0].img).map((key) => ({
            original: imagesData[0].img[key],
            thumbnail: imagesData[0].img[key],
        }))
        : [];

    return (
        <div>
            {isLoading ? (
                <p>Loading images...</p>
            ) : (
                <div className=" -z-0 " >
                    <ImageGallery autoPlay={true} items={images} />
                </div>
            )}
        </div>
    );
};

export default PackagesDetailsImage;
