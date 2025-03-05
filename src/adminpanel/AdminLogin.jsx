import React, { useState } from "react";
import { loginAdmin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Grid } from "@mui/material";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginAdmin(credentials);
      localStorage.setItem("adminToken", data.token);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "50vh", display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
          marginTop: 5
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFEB3B', // Yellow color
            color: 'black', // Text color for contrast
            '&:hover': {
              backgroundColor: '#FBC02D', // for hover effect
            },
            marginTop: 2
          }}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        {error && (
          <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default AdminLogin;