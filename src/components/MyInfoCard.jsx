import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
// import { deepPurple } from '@mui/material/colors';

export default function MyInfoCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 480,
        mx: 'auto',
        mb: 2,
        mt: 4
      }}
    >
      <CardContent>
        <Box
          sx={ theme => ({
            [theme.breakpoints.up('sm')]: {
              display: 'flex',
              gap: 2,
            }
          })}
        >
          <Avatar sx={ theme => ({
            bgcolor: theme.palette.secondary.light,
            width: 56,
            height: 56,
            [theme.breakpoints.down('sm')]: {
              mb: 2,
              mx: 'auto',
              width: 64,
              height: 64
            }
          })}>H</Avatar>
          <Box color="text.secondary">
            <Typography variant='body2'>你好，我是holafei。</Typography>
            <Typography variant='body2'>我是一个干了十几年的老前端😄，现在我想像一个菜鸟一样去学习，学习React.</Typography>
            <Typography variant='body2' mt={2}>本项目采用github action部署到github pages</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end'
        }}
      >
        <Link underline="none" href="https://github.com/HolaFei" target="_blank">github</Link>
      </CardActions>
    </Card>
  );
}
