import Button from "@mui/material/Button";
import type { ColumnDef } from "@tanstack/react-table";
import type { TableData } from "../../types";
import { ConflictsCell } from "../ConflictsCell";

export function getColumns(
  onNameClick: (name: string) => void
): ColumnDef<TableData>[] {
  return [
    {
      accessorKey: "name",
      header: "Full Name",
      cell: ({ getValue }) => {
        const name = getValue<string>();

        return (
          <Button
            onClick={() => onNameClick(name)}
            style={{
              color: "#A4CFFC",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "bold",
              padding: 0,
            }}
          >
            {name}
          </Button>
        );
      },
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
      accessorKey: "conflicts",
      header: "Conflicts",
      cell: ({ getValue }) => <ConflictsCell id={getValue<number>()} />,
      enableSorting: false,
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ getValue }) => getValue(),
      minSize: 200,
    },
  ];
}
