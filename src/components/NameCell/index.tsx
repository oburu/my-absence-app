import Button from "@mui/material/Button";

type NameCellProps = {
  name: string;
  onNameClick: (name: string) => void;
};

export const NameCell = ({ name, onNameClick }: NameCellProps) => {
  return (
    <Button
      onClick={() => onNameClick(name)}
      style={{
        color: "#A4CFFC",
        textDecoration: "underline",
        textTransform: "capitalize",
        cursor: "pointer",
        fontWeight: "bold",
        padding: 0,
      }}
    >
      {name}
    </Button>
  );
};
