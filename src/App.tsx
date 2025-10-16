import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./app.css";
import { AbsenceTable } from "./components/AbsenceTable";

function App() {
  return (
    <Stack
      sx={{
        width: { lg: "1050px" },
        margin: { lg: "0 auto" },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{ mb: 2, mt: 4, gap: 1.5, display: "flex", alignItems: "center" }}
      >
        Employees Absences
        <span role="img" aria-label="calendar">
          🗓️
        </span>
      </Typography>
      <AbsenceTable />
    </Stack>
  );
}

export default App;
