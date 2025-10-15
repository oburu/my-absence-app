import Box from "@mui/material/Box";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useAbsences } from "../../api";
import { columns, type TableData } from "./constants";
import { CustomTable, SortIcon, Td, Th, Tr } from "./Table";

export const AbsenceTable = () => {
  const { data, isLoading } = useAbsences();

  const parsedData: TableData[] | undefined = useMemo(
    () =>
      data?.map((absence) => ({
        name: `${absence.employee.firstName} ${absence.employee.lastName}`,
        startDate: new Date(absence.startDate).toLocaleDateString("en-GB"),
        endDate: new Date(
          new Date(absence.startDate).setDate(
            new Date(absence.startDate).getDate() + absence.days - 1
          )
        ).toLocaleDateString("en-GB"),
        status: absence.approved,
        type: absence.absenceType,
      })),
    [data]
  );
  const table = useReactTable({
    data: parsedData || [],
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) return <div>Loading Table...</div>;

  return (
    <Box>
      <CustomTable width={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th key={header.id} width={header.getSize()}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                {header.column.getCanSort() && (
                  <SortIcon onClick={header.column.getToggleSortingHandler()} />
                )}
                {{
                  asc: " 🔼",
                  desc: " 🔽",
                }[header.column.getIsSorted() as string] ?? null}
              </Th>
            ))}
          </Tr>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Tr
            key={row.id}
            sx={{
              backgroundColor: row.index % 2 === 0 ? "grey.900" : "transparent",
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id} width={cell.column.getSize()}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </CustomTable>
    </Box>
  );
};
