import { Button, styled } from "@mui/material";

export const PaginationButton = styled(Button)({
  border: "1px solid #424242",
  color: "white",
  "&:hover": { border: "1px solid #616161" },
  "&:active": { border: "1px solid #757575" },
  "&:disabled": { border: "1px solid #424242", color: "#616161" },
  "&:focus": { outline: "none" },
  "&:focus-visible": { outline: "none" },
  backgroundColor: "transparent",
  minWidth: "32px",
  padding: "6px",
  marginRight: "8px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
