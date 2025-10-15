import { Box } from "@mui/material";
import { useEmployeeAbsenceConflicts } from "../../api";

export const ConflictsCell = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useEmployeeAbsenceConflicts(id);

  if (isLoading) return <span>⌛</span>;

  if (isError && !isLoading)
    return <Box>Sorry there is an error with the connection ⚠️</Box>;

  const hasConflict = data?.conflicts;

  return (
    <Box
      sx={{
        color: hasConflict ? "yellow" : "green",
        textTransform: "capitalize",
        fontWeight: "bold",
      }}
    >
      {hasConflict ? "conflicted ⚠️" : "all good ✅"}
    </Box>
  );
};
