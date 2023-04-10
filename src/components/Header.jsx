import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GradientText from './GradientText'

export default function Header() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 2
      }}
    >
      <Typography component="h1" variant="h4">
        <GradientText>Holafei's notebook</GradientText>
      </Typography>
      <Typography component="h2" variant="subtitle1">
        <GradientText>for my code life / 代码人生</GradientText>
      </Typography>
    </Box>
  )
}