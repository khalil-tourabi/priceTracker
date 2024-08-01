import { Metadata } from "next";
import Welcome from "./welcome";
import TrackProduct from "./trackProductForm";
import TrackedProducts from "./trackedProducts";
// import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "dashboard",
  description: "dashboard page",
};

export default function Dashboard() {
  // const { status } = useSession();

  // if (status === "loading") {
  //   return (
  //     <center>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="w-20 animate-spin fill-blue-600 block mx-auto my-10"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
  //           data-original="#000000"
  //         />
  //       </svg>
  //       <p>Loading...</p>
  //     </center>
  //   );
  // }
  return (
    <div className="px-48 py-16">
      <Welcome />
      <TrackProduct />
      <TrackedProducts />
    </div>
  );
}
