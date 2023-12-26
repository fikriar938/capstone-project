"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";


const DeleteButton = ({id}: {id:string}) => {

    const {data:session,status} = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated" || session?.user.isAdmin) {
        return;
    }
    const handleDelete = async () => {
        const res = await fetch( process.env.URL + `/api/products/${id}`,{
            method: "DELETE"
        })
        if(res.status===200){
            router.push("/menu")
            toast("Produk telah dihapus!")
        }else{
            const data = await res.json()
            toast.error(data.message);
        }
    
    }
    return(
        <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4" onClick={handleDelete} > 
        <Image src="/delete.png" alt="" width={20} height={20} /></button>
    )
}

export default DeleteButton