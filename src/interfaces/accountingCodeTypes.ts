export type AccountingCode = {
  id: number;
  "Accounting Code": string;
  Description: string;
  Category: string;
  "Sub Category": string;
  "Last Updated": string;
  Note: string;
};

export type AccountingContextType = {
  data: AccountingCode[];
  loading: boolean;
};
