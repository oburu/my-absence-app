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
  const nameFilter = columnFilters.find((item) => item.id === "name")?.value as
    | string
    | undefined;

  return (
    <Stack height="3.5rem">
      {nameFilter ? (
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontSize="1rem">Filtering by</Typography>
          <Chip
            data-testid="chip"
            label={nameFilter}
            variant="outlined"
            onClick={() => setColumnFilters([])}
            color="warning"
            sx={{
              fontSize: "1rem",
              color: "#A4CFFC",
            }}
          />
        </Stack>
      ) : (
        <Typography fontSize="1rem" height="32px" alignContent="center">
          Click on a name to display the individual absences
        </Typography>
      )}
    </Stack>
  );
};
