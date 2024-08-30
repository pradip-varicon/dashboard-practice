import LoadingSpinner from "../../components/LoadingSpinner";
import AccountingTable from "./AccountingTable";
import { useAccounting } from "../../context/AccountingContext";

const Example = () => {
  const { data, loading } = useAccounting();

  if (loading) {
    return <LoadingSpinner />;
  }

  return <AccountingTable data={data} />;
};

export default Example;
