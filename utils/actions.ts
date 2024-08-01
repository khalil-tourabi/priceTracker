'use server';

import prisma from "@/prisma/prisma";
import { redirect } from "next/navigation";

export const getProducts = async () => {
    return await prisma.product.findMany({
      include: { priceHistories: true },
    });
  };

export const deleteProduct = async (formData: FormData) => {
    const id = formData.get('id') as string

    await prisma.priceHistory.deleteMany({
        where: {
            product_id: parseInt(id)
        }
    })
    
    const deletedProduct = await prisma.product.delete({
        where: {
            product_id: parseInt(id)
        },
        include: { 
            priceHistories: true 
        }
    })

    if (deletedProduct)
        redirect('/dashboard')
}