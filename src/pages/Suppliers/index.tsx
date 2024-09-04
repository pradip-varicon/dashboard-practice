import LoadingSpinner from "../../components/LoadingSpinner";
import SuppliersTable from "./SuppliersTable";
import { useSuppliers } from "../../context/SuppliersContext";

const Example = () => {
  const { data, loading } = useSuppliers();

  if (loading) {
    return <LoadingSpinner />;
  }

  return <SuppliersTable data={data} />;
};

export default Example;
