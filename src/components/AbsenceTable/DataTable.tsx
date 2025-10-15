import { flexRender, type Table } from "@tanstack/react-table";
import type { TableData } from "../../types";
import { CustomTable, SortIcon, Td, Th, Tr } from "./Elements";

export const DataTable = ({ table }: { table: Table<TableData> }) => (
  <CustomTable width={table.getTotalSize()}>
    {table.getHeaderGroups().map((headerGroup) => (
      <Tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <Th key={header.id} width={header.getSize()}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
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
      <Tr key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <Td key={cell.id} width={cell.column.getSize()}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Td>
        ))}
      </Tr>
    ))}
  </CustomTable>
);
