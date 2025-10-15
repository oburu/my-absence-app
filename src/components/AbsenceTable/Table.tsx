import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Box, styled } from "@mui/material";

export const CustomTable = styled(Box)({
  border: "1px solid #424242",
  borderRadius: "8px",
});

export const Tr = styled(Box)({
  display: "flex",
});

export const Th = styled(Box)({
  position: "relative",
  display: "flex",
  color: "gray.400",
  padding: "0.5rem",
  fontWeight: "bold",
  fontSize: "0.875rem",
  textTransform: "uppercase",
  textAlign: "center",
  boxShadow: "inset 0 0 0 1px #424242",
  "&:hover .resizer": {
    opacity: 1,
  },
});

export const Td = styled(Box)({
  padding: "0.5rem",
  fontSize: "0.875rem",
  boxShadow: "inset 0 0 0 1px #424242",
});

export const SortIcon = styled(SwapVertIcon)({
  fontSize: "1rem",
  color: "gray",
  cursor: "pointer",
  marginLeft: "8px",
});
