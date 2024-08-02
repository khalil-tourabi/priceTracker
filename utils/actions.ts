'use server';

import prisma from "@/prisma/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


export const getProducts = async () => {
    const session = await getServerSession();

    const currentUser = await prisma.user.findUnique({
        where: { email: session?.user?.email! }
    })

    if (!currentUser)
        throw new Error('User not found!')

    return await prisma.product.findMany({
        where: { user_id: currentUser.user_id },
        select: {
            product_id: true,
            name: true,
            url: true,
            priceHistories: {
                select: {
                    price: true,
                    timestamp: true,
                }
            }
        }
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

export const TrackNewProduct = async (title: string, price: string, url: string) => {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            throw new Error('User email is not available.');
        }

        // get current user
        const currentUser = await prisma.user.findUnique({
            where: { email: session.user.email }
        });

        // Check if there is a session (user is logged in)
        if (!currentUser) {
            throw new Error('User not found.');
        }

        // Check if the product is already being tracked
        const ProductExist = await prisma.product.findFirst({
            where: {
                user_id: currentUser.user_id,
                url
            },
        })

        // if The product is already tracked throw an error
        if (ProductExist)
            throw new Error('Product is already being tracked!')

        const productCount = await prisma.product.count({ where: { user_id: currentUser.user_id } });
        if (productCount >= 1)
            throw new Error('You can only track one product on free plan, if you want to track more products please upgrade your plan.');
        
        // if the product is not already being tracked create a new one
        const newProduct = await prisma.product.create({
            data: {
                name: title,
                url,
                user_id: currentUser.user_id
            },
        });

        // if the product is created create a new price history
        if (newProduct) {
            const newPriceHistory = await prisma.priceHistory.create({
                data: {
                    product_id: newProduct.product_id,
                    price: parseFloat(price),
                    timestamp: new Date()
                }
            });

            // if all went great refresh the page
            // if (newPriceHistory) 
            //     redirect('/dashboard');
        }
    } catch (error) {
        console.error('Error tracking new product:', error);
    }
};