import type { ColumnDef } from "@tanstack/react-table";

export type TableData = {
  name: string;
  startDate: string;
  endDate: Date;
  status: boolean;
  type: string;
};

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
    minSize: 250,
  },
  {
    accessorKey: "startDate",
    header: "From",
    cell: (info) => {
      const date = String(info.getValue());
      return new Date(date).toLocaleDateString("en-GB");
    },
    minSize: 150,
  },
  {
    accessorKey: "endDate",
    header: "to",
    cell: (info) => (info.getValue() as Date).toLocaleDateString("en-GB"),
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
    minSize: 200,
  },
];
