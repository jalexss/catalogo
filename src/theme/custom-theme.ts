import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#4a14Bc'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {},
    },
  }
});