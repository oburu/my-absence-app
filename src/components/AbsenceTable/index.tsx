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
import type { TableData } from "../../types";
import { calculateEndDate } from "../../utils";
import { ErrorMessage } from "../ErrorMessage";
import Pagination from "../Pagination";
import { columns } from "./helper";
import { TableWrapper } from "./TableWrapper";

export const AbsenceTable = () => {
  const { data, isLoading, isError } = useAbsences();

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

  const table = useReactTable({
    data: parsedData || [],
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isError && !isLoading) return <ErrorMessage />;

  if (isLoading) return <Box>Loading Table ⌛...</Box>;

  return (
    <Box sx={{ overflowX: "auto", width: "100%", margin: "0 auto" }}>
      <TableWrapper table={table} />
      {table.getPageCount() > 1 && <Pagination table={table} />}
    </Box>
  );
};
