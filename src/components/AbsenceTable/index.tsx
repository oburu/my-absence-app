import Box from "@mui/material/Box";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useAbsences } from "../../api";
import { useColumFilters } from "../../hooks/useColumnFilters";
import type { TableData } from "../../types";
import { calculateEndDate } from "../../utils";
import { ErrorMessage } from "../ErrorMessage";
import { NameFilter } from "../NameFilter";
import Pagination from "../Pagination";
import { DataTable } from "./DataTable";
import { getColumns } from "./helper";

export const AbsenceTable = () => {
  const { data, isLoading, isError } = useAbsences();

  const { columnFilters, setColumnFilters, handleNameClick } =
    useColumFilters();

  const parsedData: TableData[] | undefined = useMemo(
    () =>
      data?.map((absence) => ({
        name: `${absence.employee.firstName} ${absence.employee.lastName}`,
        startDate: absence.startDate,
        endDate: calculateEndDate(absence.startDate, absence.days),
        status: absence.approved,
        type: absence.absenceType,
        conflicts: absence.id,
      })),
    [data]
  );

  const columns = useMemo(() => getColumns(handleNameClick), [handleNameClick]);

  const table = useReactTable({
    data: parsedData || [],
    columns,
    state: { columnFilters },
    onColumnFiltersChange: () => {},
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isError && !isLoading) return <ErrorMessage />;

  if (isLoading) return <Box>Loading Table ⌛...</Box>;

  return (
    <>
      <NameFilter
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Box sx={{ overflowX: "auto", width: "100%", margin: "0 auto" }}>
        <DataTable table={table} />
      </Box>
      {table.getPageCount() > 1 && <Pagination table={table} />}
    </>
  );
};
