import type { ColumnDef } from "@tanstack/react-table";
import type { TableData } from "../../types";
import { ConflictsCell } from "../ConflictsCell";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "name",
    header: "Full Name",
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
    header: "To",
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
