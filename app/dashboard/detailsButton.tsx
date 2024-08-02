import { redirectToProduct } from "@/utils/actions";
import React from "react";

const DetailsButton = ({ id }: { id: number }) => {
  return (
    <form action={redirectToProduct}>
      <input type="hidden" name="id" value={id} />
      <button className="text-blue-600 mr-4" type="submit">
        Details
      </button>
    </form>
  );
};

export default DetailsButton;
