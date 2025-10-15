export type AbsenceResponse = {
  id: number;
  startDate: string;
  days: number;
  absenceType: string;
  employee: {
    firstName: string;
    lastName: string;
    id: string;
  };
  approved: boolean;
};

export type AbsenceConflictsResponse = {
  conflicts: boolean;
};
