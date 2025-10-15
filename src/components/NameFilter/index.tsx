import { Chip, Stack, Typography } from "@mui/material";
import type { ColumnFiltersState } from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";

type NameFilterProps = {
  columnFilters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
};

export const NameFilter = ({
  columnFilters,
  setColumnFilters,
}: NameFilterProps) => {
  const nameFilter = columnFilters.find((f) => f.id === "name")?.value as
    | string
    | undefined;

  return (
    <Stack height="3.5rem">
      {nameFilter ? (
        <>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontSize={16}>Filtering by</Typography>
            <Chip
              label={nameFilter}
              variant="outlined"
              onDelete={() => setColumnFilters([])}
              onClick={() => setColumnFilters([])}
              color="warning"
              sx={{
                fontSize: "1rem",
                color: "#A4CFFC",
              }}
            />
            <Typography fontSize={16}>
              (click table or chip name to leave)
            </Typography>
          </Stack>
        </>
      ) : (
        <Typography fontSize={16}>
          Click on a name to display the individual absences
        </Typography>
      )}
    </Stack>
  );
};
