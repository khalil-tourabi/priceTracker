"use client";

import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";
import { getProductById } from "@/utils/actions";

interface PriceHistory {
  price_id: number;
  product_id: number;
  price: number;
  timestamp: Date;
}

interface Product {
  product_id: number;
  name: string;
  url: string;
  user_id: number;
  priceHistories: PriceHistory[];
}

interface Props {
  params: { id: number };
}

const ProductPage = ({ params: { id } }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await getProductById(id);
        console.log("Product data:", productData);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div className="font-sans pt-10">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src="https://readymadeui.com/images/product2.webp"
              alt="Product"
              className="w-4/5 rounded-md object-cover"
            />
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {product ? product.name : "Loading..."}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">
                Current Price: <span className="text-gray-600">
                  {product ? product.priceHistories[0]?.price : "Loading..."}
                </span> MAD
              </p>
              <p className="text-gray-800 text-xl font-bold">
                Last change occurred in: <span className="text-gray-600">
                  {product ? new Date(product.priceHistories[0]?.timestamp).toLocaleDateString() : "Loading..."}
                </span>
              </p>
            </div>
            <button
              type="button"
              className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
            >
              Visit Product at jumia
            </button>
            <div className="mt-8 space-y-5">
              <h3 className="text-xl font-bold text-gray-800">
                Product History:
              </h3>
              <h3 className="text-lg font-bold text-gray-800 pl-5">
                Highest Price: <span className="text-red-600">
                  {product ? Math.max(...product.priceHistories.map((ph: PriceHistory) => ph.price)) : "Loading..."}
                </span> MAD
              </h3>
              <h3 className="text-lg font-bold text-gray-800 pl-5">
                Lowest Price: <span className="text-blue-600">
                  {product ? Math.min(...product.priceHistories.map((ph: PriceHistory) => ph.price)) : "Loading..."}
                </span> MAD
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-10">
        <h2 className="text-2xl font-bold text-gray-800">Price History chart</h2>
        <LineChart
  className="w-full h-4/5"
  xAxis={[
    {
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
  ]}
  series={[
    {
      data: product
        ? product.priceHistories.map((ph: PriceHistory) => parseInt(ph.price.toString()))
        : [],
    },
  ]}
  width={500}
  height={300}
/>

      </div>
    </div>
  );
};

export default ProductPage;
