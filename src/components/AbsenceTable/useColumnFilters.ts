import { type ColumnFiltersState } from "@tanstack/react-table";
import { useCallback, useState } from "react";

export const useColumFilters = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleNameClick = useCallback((name: string) => {
    setColumnFilters((prev) => {
      const current = prev.find((item) => item.id === "name");
      if (current?.value === name) {
        return prev.filter((item) => item.id !== "name");
      }

      return [{ id: "name", value: name }];
    });
  }, []);

  return {
    columnFilters,
    setColumnFilters,
    handleNameClick,
  };
};
