import axios from "axios";
import { AC_API_URL } from "../constants/accountingCodeConstants";

export const fetchAccountingCodes = async () => {
  try {
    const response = await axios.get(AC_API_URL);
    return response.data["accounting-codes"];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
