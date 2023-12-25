import { NextRequest, NextResponse } from "next/server";

export const PUT =  async (req:NextRequest, {params}: {params: {id:string} } )=> {
    const {id} = params;

    try {

        const body = await req.json()

        await prisma?.order.update({
            where: {
                id: id,
            },
            data: {status:body},
        })
        return new NextResponse(JSON.stringify({message:"order telah diperbarui!"}), {status:200})
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"ada yang salah"}), {status:500})
    }
}