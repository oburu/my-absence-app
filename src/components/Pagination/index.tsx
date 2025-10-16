import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import type { Table } from "@tanstack/react-table";
import type { TableData } from "../../types";
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ table }: { table: Table<TableData> }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      mt: 2,
      color: "white",
    }}
  >
    <Typography variant="body2" component="div">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <PaginationButton
        data-testid="backPage"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowBackIcon />
      </PaginationButton>
      <PaginationButton
        data-testid="nextPage"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowForwardIcon />
      </PaginationButton>
    </Box>
  </Box>
);
