import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Bem-vindo ao seu painel de controle!
        </Typography>
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;