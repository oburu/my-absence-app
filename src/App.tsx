import { useAbsences } from "./api";
import "./app.css";

function App() {
  const { data, isLoading } = useAbsences();

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

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
