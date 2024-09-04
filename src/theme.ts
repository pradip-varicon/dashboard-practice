import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E8083E",
      light: "#F86A8D",
      dark: "#C41C2A",
      contrastText: "#fff",
    },
    secondary: {
      main: "#02864A",
      light: "#4CAF6F",
      dark: "#015F31",
      contrastText: "#fff",
    },
    success: {
      main: "#66BB6A",
      contrastText: "#fff",
    },
    error: {
      main: "#F44336",
      contrastText: "#fff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#1C1A27",
      secondary: "#7C7C7C",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1C1A27",
          color: "#fff",
          width: 240,
          "& .MuiListItemIcon-root": {
            color: "#fff",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          height: "40px",
          "&.Mui-selected": {
            background: "linear-gradient(90deg, #FF6F00 0%, #E8083E 100%)",
            color: "#fff",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#E0E0E0",
          margin: "0.5rem 0",
        },
      },
    },
  },
});

export default theme;
