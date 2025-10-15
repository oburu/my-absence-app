import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./app.css";
import { AbsenceTable } from "./components/AbsenceTable";

function App() {
  return (
    <Box>
      <Typography
        component="h2"
        variant="h4"
        sx={{ mb: 2, mt: 4, gap: 1.5, display: "flex", alignItems: "center" }}
      >
        Employees Absences
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Typography>
      <AbsenceTable />
      <Typography py={4}>
        Click on row to see only that user's absences
      </Typography>
    </Box>
  );
}

export default App;
