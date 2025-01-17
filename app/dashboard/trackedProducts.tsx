import { getProducts } from "@/utils/actions";
import DeleteButton from "./deleteButton";
import { redirect } from "next/navigation";
import DetailsButton from "./detailsButton";

const TrackedProducts = async () => {
  const products = await getProducts();
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
                {/* <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  URL
                </th> */}
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

            {products.length > 0 ? (
              <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                {products.map((product) => {
                  const latestPrice =
                    product.priceHistories.length > 0
                      ? product.priceHistories[
                          product.priceHistories.length - 1
                        ]
                      : null;
                  return (
                    <tr key={product.product_id}>
                      <td className="px-4 py-4 text-sm text-gray-800">
                        {product.name}
                      </td>
                      {/* <td className="px-4 py-4 text-sm text-gray-800">
            {product.url}
          </td> */}
                      <td className="px-4 py-4 text-sm text-gray-800">
                        {latestPrice
                          ? `$${latestPrice.price.toFixed(2)}`
                          : "N/A"}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800">
                        {latestPrice
                          ? new Date(latestPrice.timestamp).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-800">
                        <DetailsButton id={product.product_id} />
                        <DeleteButton id={product.product_id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-4 text-center text-gray-800"
                  >
                    <h1 className="text-slate-600">
                      There are no products being tracked yet
                    </h1>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default TrackedProducts;
