import "./app.css";
import { AbsenceTable } from "./components/AbsenceTable";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-12">
      <h2>Absence Dashboard</h2>
      <AbsenceTable />
      <p>Click on row to see only that user's absences</p>
    </div>
  );
}

export default App;
