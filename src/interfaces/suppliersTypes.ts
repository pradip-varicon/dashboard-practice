export type SupplierType = {
  id: number;
  "Accounting Code": string;
  Description: string;
  Category: string;
  "Sub Category": string;
  "Last Updated": string;
  Note: string;
};

export type SupplierContextType = {
  data: SupplierType[];
  loading: boolean;
};
