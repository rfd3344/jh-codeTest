import { Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Go to Login Page
      </Button>
    </Container>
  );
};
