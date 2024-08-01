import { getProducts } from "@/utils/actions";
import DeleteButton from "./deleteButton";

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
              {products.map((product) => {
                const latestPrice =
                  product.priceHistories.length > 0
                    ? product.priceHistories[product.priceHistories.length - 1]
                    : null;
                return (
                  <tr key={product.product_id}>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {product.name}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {product.url}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {latestPrice ? `$${latestPrice.price.toFixed(2)}` : "N/A"}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {latestPrice
                        ? new Date(latestPrice.timestamp).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      <button className="text-blue-600 mr-4">Details</button>
                      <DeleteButton id={product.product_id} />
                    </td>
                  </tr>
                );
              })}

              {/* <tr>
                <td className="px-4 py-4 text-sm text-gray-800">Product 1</td>
                <td className="px-4 py-4 text-sm text-gray-800">Product url</td>
                <td className="px-4 py-4 text-sm text-gray-800">66.99</td>
                <td className="px-4 py-4 text-sm text-gray-800">2022-05-15</td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <button className="text-blue-600 mr-4">Details</button>
                  <button className="text-red-600" type="button">
                    Delete
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TrackedProducts;
