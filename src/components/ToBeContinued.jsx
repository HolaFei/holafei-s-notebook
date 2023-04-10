import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GradientText from "./GradientText";

export default function ToBeContinued() {
  return (
    <Box textAlign="center" marginY={4}>
      <Typography variant="h4">
        🏗️
        <GradientText variant="h6">To be continued...</GradientText>
      </Typography>
    </Box>
  )
}