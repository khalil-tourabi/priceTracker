import { deleteProduct } from "@/utils/actions";
import React from "react";

const DeleteButton = ({ id }: { id: number }) => {
  return (
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={id} />
      <button className="text-red-600" type="submit">Delete</button>
    </form>
  );
};

export default DeleteButton;
