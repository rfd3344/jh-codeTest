import { Container, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SimpleTabs } from 'src/components/tabs/SimpleTabs';
import { LoginPanel } from './LoginPanel';
import { NewToCarlyPanel } from './NewToCarlyPanel';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: 'url(/images/Carly_BG.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
    },
  },
  tabs: {
    padding: theme.spacing(5),
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& #tabs button': {
      fontSize: '1em',
      width: '50%',
      fontWeight: 'bold',
      color: theme.palette.grey.light,
      opacity: 0.5,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: '0 0 1px 0',
      borderRadius: '4px 4px 0 0',
      '&.Mui-selected': {
        borderWidth: '1px 1px 0 1px',
        opacity: 1,
      },
    },
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.page}>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <SimpleTabs
            className={classes.tabs}
            tabs={[
              { label: 'New to Carly?', panel: <NewToCarlyPanel /> },
              { label: 'Log In', panel: <LoginPanel /> },
            ]}
          />
        </Paper>
      </Container>
    </Box>
  );
};
