import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchSuppliers } from "../services/supplierService";
import { Supplier, SupplierContextType } from "../interfaces/suppliersTypes";

const SuppliersContext = createContext<SupplierContextType | undefined>(
  undefined
);

export const SuppliersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const suppliers = await fetchSuppliers();
        setData(suppliers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SuppliersContext.Provider value={{ data, loading }}>
      {children}
    </SuppliersContext.Provider>
  );
};

export const useSuppliers = () => {
  const context = useContext(SuppliersContext);
  if (context === undefined) {
    throw new Error("useSuppliers must be used within an SuppliersProvider");
  }
  return context;
};
