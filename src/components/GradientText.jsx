import Typography from '@mui/material/Typography'

export default function GradientText({ children, ...rest }) {
  return (
    <Typography
      component="span"
      variant="inherit"
      sx={{
        display: 'inline',
        color: 'transparent',
        backgroundImage: 'linear-gradient(to right, #f43f5e, #8b5cf6)',
        backgroundClip: 'text'
      }}
      {...rest}
    >
      { children }
    </Typography>
  )
}
