"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const TrackedProducts = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="border border-black rounded-3xl p-4 bg-slate-50">
        <h2 className="text-xl mb-6">Tracked Products: </h2>
        <div className="font-sans overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  URL
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Last Change
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              <tr>
                <td className="px-4 py-4 text-sm text-gray-800">Product 1</td>
                <td className="px-4 py-4 text-sm text-gray-800">Product url</td>
                <td className="px-4 py-4 text-sm text-gray-800">66.99</td>
                <td className="px-4 py-4 text-sm text-gray-800">2022-05-15</td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <button className="text-blue-600 mr-4">Details</button>
                  <button
                    className="text-red-600"
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4 text-sm text-gray-800">Product2</td>
                <td className="px-4 py-4 text-sm text-gray-800">Product URL</td>
                <td className="px-4 py-4 text-sm text-gray-800">19.99</td>
                <td className="px-4 py-4 text-sm text-gray-800">2022-07-20</td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <button className="text-blue-600 mr-4">Details</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4 text-sm text-gray-800">Product 3</td>
                <td className="px-4 py-4 text-sm text-gray-800">Product URL</td>
                <td className="px-4 py-4 text-sm text-gray-800">69.99</td>
                <td className="px-4 py-4 text-sm text-gray-800">2022-07-21</td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <button className="text-blue-600 mr-4">Details</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete product modal */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Delete Product
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this product?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Delete
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TrackedProducts;
