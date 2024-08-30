import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchAccountingCodes } from "../services/accountingCodeService";
import {
  AccountingCode,
  AccountingContextType,
} from "../interfaces/accountingCodeTypes";

const AccountingContext = createContext<AccountingContextType | undefined>(
  undefined
);

export const AccountingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<AccountingCode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountingCodes = await fetchAccountingCodes();
        setData(accountingCodes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AccountingContext.Provider value={{ data, loading }}>
      {children}
    </AccountingContext.Provider>
  );
};

export const useAccounting = () => {
  const context = useContext(AccountingContext);
  if (context === undefined) {
    throw new Error("useAccounting must be used within an AccountingProvider");
  }
  return context;
};
