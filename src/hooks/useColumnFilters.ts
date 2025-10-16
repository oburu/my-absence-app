import { type ColumnFiltersState } from "@tanstack/react-table";
import { useCallback, useState } from "react";

export const useColumFilters = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleNameClick = useCallback((name: string) => {
    setColumnFilters([{ id: "name", value: name }]);
  }, []);

  return {
    columnFilters,
    setColumnFilters,
    handleNameClick,
  };
};
