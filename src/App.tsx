import { useAbsences, useEmployeeAbsenceConflicts } from "./api";
import "./app.css";

function App() {
  const { data, isLoading } = useAbsences();
  const { data: conflictData } = useEmployeeAbsenceConflicts(1);

  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  if (data) {
    console.log(conflictData);
  }

  return (
    <>
      <h1>Dashboard</h1>

      <p className="read-the-docs">
        Click on row to see only that user's absences
      </p>
    </>
  );
}

export default App;
