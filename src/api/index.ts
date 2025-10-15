import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "https://front-end-kata.brighthr.workers.dev/api/";

export async function fetchAbsences(): Promise<any[]> {
  const res = await fetch(`${API_BASE_URL}absences`);
  if (!res.ok) throw new Error("Failed to fetch Absences");
  return res.json();
}

export async function fetchAbsenceConflict(clientId: string): Promise<any> {
  const res = await fetch(`${API_BASE_URL}client/${clientId}`);
  if (!res.ok) throw new Error("Failed to fetch Absence Conflict");
  return res.json();
}

export const useEmployeeAbsenceConflict = (employeeId: string) =>
  useQuery({
    queryKey: ["absenceConflict", employeeId],
    queryFn: () => fetchAbsenceConflict(employeeId),
    enabled: !!employeeId,
  });

export const useAbsences = () =>
  useQuery({
    queryKey: ["absences"],
    queryFn: fetchAbsences,
  });

//conflict/{id}
//absences
