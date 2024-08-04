import { updateAccount } from "@/utils/actions";
import React from "react";

const UpgradeButton = () => {
  return (
    <form action={updateAccount}>
      <input type="hidden" name="upgrade" value="true" />
      <button
        type="submit"
        className="w-full mt-6 px-5 py-2.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Buy now
      </button>
    </form>
  );
};

export default UpgradeButton;
