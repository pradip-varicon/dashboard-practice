import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: 240, flexShrink: 0 }}
      >
        <Box sx={{ width: "200px", padding: 2 }}>
          <Typography variant="h6" noWrap>
            Navigation
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Menu Item 1
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Menu Item 2
          </Button>
        </Box>
      </Drawer>
      <Box sx={{ marginLeft: "230px", padding: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">My App</Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h1">Welcome to My App</Typography>
          <Typography variant="h2" gutterBottom>
            Subheading
          </Typography>
          <Typography variant="body1">
            This is some body text to demonstrate the typography styles applied
            in this theme.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Primary Button
          </Button>
          <Button variant="contained" color="secondary" sx={{ mt: 2, ml: 2 }}>
            Secondary Button
          </Button>
          <Paper sx={{ marginTop: 3, padding: 2 }}>
            <Typography variant="h3">Paper Component</Typography>
            <Typography variant="body1">
              This is a paper component with some content inside. The box shadow
              and padding are applied via the theme.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
