import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F29C1F",
      light: "#F7C158",
      dark: "#C77400",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1A3A77",
      light: "#4F6A9F",
      dark: "#00204E",
      contrastText: "#fff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#1A3A77",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#1A3A77",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#1A3A77",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "8px 16px",
          "&.MuiButton-containedPrimary": {
            backgroundColor: "#F29C1F",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#C77400",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A3A77",
          color: "#fff",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1A3A77",
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
