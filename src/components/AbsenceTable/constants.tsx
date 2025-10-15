import type { ColumnDef } from "@tanstack/react-table";

export type TableData = {
  name: string;
  startDate: string;
  endDate: string;
  status: boolean;
  type: string;
};

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
    minSize: 200,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: (info) => info.getValue(),
    minSize: 150,
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: (info) => info.getValue(),
    minSize: 150,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => (info.getValue() ? "Approved" : "Pending"),
    minSize: 150,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => info.getValue(),
    minSize: 150,
  },
];
