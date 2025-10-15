import type { ColumnDef } from "@tanstack/react-table";
import { ConflictsCell } from "../ConflictsCell";

export type TableData = {
  name: string;
  startDate: string;
  endDate: Date;
  status: boolean;
  type: string;
  conflicts: boolean | number;
};

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => getValue(),
    minSize: 250,
  },
  {
    accessorKey: "startDate",
    header: "From",
    cell: ({ getValue }) => {
      const date = String(getValue());
      return new Date(date).toLocaleDateString("en-GB");
    },
    minSize: 150,
  },
  {
    accessorKey: "endDate",
    header: "to",
    cell: ({ getValue }) => getValue<Date>().toLocaleDateString("en-GB"),
    minSize: 150,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => (getValue() ? "Approved" : "Pending"),
    minSize: 150,
    enableSorting: false,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => getValue(),
    minSize: 200,
  },

  {
    accessorKey: "conflicts",
    header: "Conflicts",
    cell: ({ getValue }) => <ConflictsCell id={getValue<number>()} />,
    enableSorting: false,
  },
];
