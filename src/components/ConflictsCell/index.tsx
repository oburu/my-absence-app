import { Box } from "@mui/material";
import { useEmployeeAbsenceConflicts } from "../../api";

export const ConflictsCell = ({ id }: { id: number }) => {
  const { data, isLoading } = useEmployeeAbsenceConflicts(id);

  if (isLoading) return <span>⌛</span>;

  const hasConflict = data?.conflicts;

  return (
    <Box
      sx={{
        color: hasConflict ? "tomato" : "green",
        textTransform: "capitalize",
        fontWeight: "bold",
      }}
    >
      {hasConflict ? "conflicts" : "no conflicts"}
    </Box>
  );
};
