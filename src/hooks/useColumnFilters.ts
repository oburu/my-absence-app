import { type ColumnFiltersState } from "@tanstack/react-table";
import { useCallback, useState } from "react";

export const useColumFilters = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleNameClick = useCallback((name: string) => {
    setColumnFilters((prev) =>
      prev.some((item) => item.id === "name" && item.value === name)
        ? prev.filter((item) => item.id !== "name")
        : [{ id: "name", value: name }]
    );
  }, []);

  return {
    columnFilters,
    setColumnFilters,
    handleNameClick,
  };
};
