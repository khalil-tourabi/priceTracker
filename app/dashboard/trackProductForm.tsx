"use client";

import React from "react";

const TrackProduct = () => {
  return (
    <div className="border border-black rounded-3xl p-4 bg-slate-50 mb-10">
      <h2 className="text-xl mb-6">Add a product to track</h2>
      <div>
        <form>
          <label htmlFor="label URL" className="block text-lg pl-4">
            Product URL:{" "}
          </label>
          <center>
            <input
              type="text"
              name="url"
              id="url"
              className="border border-black rounded-3xl p-2 w-4/5"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 ml-4 border border-black rounded-3xl mt-4"
            >
              Track
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default TrackProduct;
