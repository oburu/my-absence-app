import Box from "@mui/material/Box";

export const ErrorMessage = () => (
  <Box
    sx={{
      border: "1px solid tomato",
      borderRadius: "8px",
      padding: "1rem",
      width: "fit-content",
    }}
  >
    Sorry there is an error with the connection ⚠️
  </Box>
);
