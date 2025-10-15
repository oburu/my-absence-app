import { useQuery } from "@tanstack/react-query";
import type { AbsenceConflictsResponse, AbsenceResponse } from "../types";

const API_BASE_URL = "https://front-end-kata.brighthr.workers.dev/api/";

export async function fetchAbsences(): Promise<AbsenceResponse[]> {
  const res = await fetch(`${API_BASE_URL}absences`);
  if (!res.ok) throw new Error("Failed to fetch Absences");
  return res.json();
}

export async function fetchAbsenceConflicts(
  employeeId: number
): Promise<AbsenceConflictsResponse> {
  const res = await fetch(`${API_BASE_URL}conflict/${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch Absence Conflict");
  return res.json();
}

export const useEmployeeAbsenceConflicts = (employeeId: number) =>
  useQuery({
    queryKey: ["absenceConflict", employeeId],
    queryFn: () => fetchAbsenceConflicts(employeeId),
    enabled: !!employeeId,
  });

export const useAbsences = () =>
  useQuery({
    queryKey: ["absences"],
    queryFn: fetchAbsences,
  });
