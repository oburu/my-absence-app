import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Box, styled } from "@mui/material";

export const CustomTable = styled(Box)({
  borderRadius: "8px",
});

export const Tr = styled(Box)({
  display: "flex",
});

export const Th = styled(Box)({
  position: "relative",
  display: "flex",
  color: "gray.400",
  padding: "1rem",
  fontWeight: "bold",
  fontSize: "1rem",
  textAlign: "center",
  backgroundColor: "rgba(43, 23, 42, 1)",
  boxShadow: "inset 0 0 0 1px #3b383eff",
  borderRadius: "8px",
  "&:hover .resizer": {
    opacity: 1,
  },
});

export const Td = styled(Box)({
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  boxShadow: "inset 0 0 0 1px #424242",
});

export const SortIcon = styled(SwapVertIcon)({
  display: "flex",
  alignSelf: "center",
  fontSize: "1.5rem",
  color: "gray",
  cursor: "pointer",
  marginLeft: "8px",
  marginRight: "8px",
});
