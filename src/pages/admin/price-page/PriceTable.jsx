import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const PriceTable = () => {
    const axiosPublic = useAxiosPublic();
    const { data: PriceData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['PriceData',],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-price`);
            return res.data?.data;
        }
    });
    const onDelete = async (id) => {
        console.log(id)
    };
    const onEdit = async (id) => {
        console.log(id)
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left">Created At</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                    {PriceData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-6">{item.price}</td>
                            <td className="py-3 px-6">{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td className="py-3 px-6 text-center">
                                <button
                                    onClick={() => onEdit(item?._id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(item?._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceTable;
