import Swal from "sweetalert2";



export const bookingAlert = async () => {
    return (
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, i am booking this!"
        })
    )
}

