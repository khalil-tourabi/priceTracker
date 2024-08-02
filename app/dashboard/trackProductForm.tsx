"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import axios from "axios";
import cheerio from "cheerio";
import { TrackNewProduct } from "@/utils/actions";

const schema = z.object({
  url: z.string().min(1, { message: "URL is required" }).url({ message: "Invalid URL" }),
});

type FormFields = z.infer<typeof schema>;

const TrackProduct = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const result = await axios.get(`${data.url}`);
      const $ = cheerio.load(result.data);

      const title = $('h1.-fs20.-pts.-pbxs').text().trim();
      console.log(`Title: ${title}`);
      
      const price = $('span.-b.-ubpt.-tal.-fs24.-prxs').text().trim();
      console.log(`Price: ${price.split(' ')[0]}`);

      await TrackNewProduct(title, price, data.url);
      
    } catch (error) {
      console.error(`Failed to fetch data: ${error}`);
    }
  };

  return (
    <div className="border border-black rounded-3xl p-4 bg-slate-50 mb-10">
      <h2 className="text-xl mb-6">Add a product to track</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="label URL" className="block text-lg pl-16">
            Product URL:{" "}
          </label>
          <center>
            <input
              {...register("url")}
              type="text"
              id="url"
              className="border border-black rounded-3xl p-2 w-4/5 px-4"
            />
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 ml-4 border border-black rounded-3xl mt-4"
            >
              {isSubmitting ? "Tracking..." : "Track"}
            </button>
          </center>
        </form>
        <center>
          <span className="text-red-500">{errors.url?.message}</span>
        </center>
      </div>
    </div>
  );
};

export default TrackProduct;
