export function calculateEndDate(startDate: string, days: number): Date {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + days - 1);

  return end;
}
