import Typography from '@mui/material/Typography'

export default function GradientText({ children, colors = ['#f43f5e', '#8b5cf6'], ...rest }) {
  return (
    <Typography
      component="span"
      variant="inherit"
      sx={{
        display: 'inline',
        color: 'transparent',
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        backgroundClip: 'text'
      }}
      {...rest}
    >
      { children }
    </Typography>
  )
}
