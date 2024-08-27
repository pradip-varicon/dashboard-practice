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
          backgroundColor: "#002e5d",
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
            background: "linear-gradient(90deg, #F2700A 0%, #FAA33D 100%)",
            color: "#fff",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#4F6A9F",
          margin: "0.5rem 0",
        },
      },
    },
  },
});

export default theme;
