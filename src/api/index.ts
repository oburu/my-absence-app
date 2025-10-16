import { useQuery } from "@tanstack/react-query";
import { ABSENCE_PATH, API_BASE_URL, CONFLICTS_PATH } from "../constants";
import type { AbsenceConflictsResponse, AbsenceResponse } from "../types";

export async function fetchAbsences(): Promise<AbsenceResponse[]> {
  const res = await fetch(`${API_BASE_URL}${ABSENCE_PATH}`);
  if (!res.ok) throw new Error("Failed to fetch Absences");
  return res.json();
}

export async function fetchAbsenceConflicts(
  employeeId: number
): Promise<AbsenceConflictsResponse> {
  const res = await fetch(`${API_BASE_URL}${CONFLICTS_PATH}${employeeId}`);
  if (!res.ok) throw new Error("Failed to fetch Absence Conflict");
  return res.json();
}

export const useEmployeeAbsenceConflicts = (employeeId: number) =>
  useQuery({
    queryKey: ["absenceConflict", employeeId],
    queryFn: () => fetchAbsenceConflicts(employeeId),
    enabled: Boolean(employeeId),
  });

export const useAbsences = () =>
  useQuery({
    queryKey: ["absences"],
    queryFn: fetchAbsences,
  });
