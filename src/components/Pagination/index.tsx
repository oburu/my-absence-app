import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, styled, Typography } from "@mui/material";
import type { Table } from "@tanstack/react-table";
import type { TableData } from "../../types";

export const PaginationButton = styled(Button)({
  border: "1px solid #424242",
  color: "white",
  "&:hover": { border: "1px solid #616161" },
  "&:active": { border: "1px solid #757575" },
  "&:disabled": { border: "1px solid #424242", color: "#616161" },
  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
  backgroundColor: "transparent",
  minWidth: "32px",
  padding: "6px",
  marginRight: "8px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Pagination = ({ table }: { table: Table<TableData> }) => {
  return (
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
        Page{" "}
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>{" "}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PaginationButton
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowBackIcon />
        </PaginationButton>
        <PaginationButton
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowForwardIcon />
        </PaginationButton>
      </Box>
    </Box>
  );
};

export default Pagination;
