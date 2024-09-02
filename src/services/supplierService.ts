import axios from "axios";
import { AC_API_URL } from "../constants/supplierConstants";

export const fetchSuppliers = async () => {
  try {
    const response = await axios.get(AC_API_URL);
    return response.data["suppliers"];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
