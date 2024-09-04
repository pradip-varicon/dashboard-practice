import { Box, Button } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
} from "material-react-table";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { Supplier } from "../../interfaces/suppliersTypes";

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const columns = [
  { accessorKey: "id", header: "ID", size: 50 },
  { accessorKey: "Accounting Code", header: "Accounting Code", size: 150 },
  { accessorKey: "Description", header: "Description", size: 250 },
  { accessorKey: "Category", header: "Category", size: 150 },
  { accessorKey: "Sub Category", header: "Sub Category", size: 150 },
  { accessorKey: "Last Updated", header: "Last Updated", size: 150 },
  { accessorKey: "Note", header: "Note", size: 250 },
];

const AccountingTable = ({ data }: { data: Supplier[] }) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiTableContainerProps: {
      sx: {
        maxHeight: "60vh",
        overflowX: "auto",
      },
    },
    muiTableProps: {
      sx: {
        width: "100%",
        tableLayout: "fixed",
        "& .MuiTableCell-root": {
          borderRight: "1px solid #ddd",
        },
        "& .MuiTableCell-root:last-child": {
          borderRight: "none",
        },
      },
    },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{ display: "flex", gap: "16px", padding: "8px", flexWrap: "wrap" }}
      >
        <Button
          onClick={() => handleExportData(data)}
          startIcon={<FileDownloadIcon />}
        >
          Export All Data
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  const handleExportRows = (rows: MRT_Row<Supplier>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = (data: Supplier[]) => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  return <MaterialReactTable table={table} />;
};

export default AccountingTable;
