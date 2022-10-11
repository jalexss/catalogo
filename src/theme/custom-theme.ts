import { createTheme } from "@mui/material";
import { red, grey } from "@mui/material/colors";


export const customTheme = createTheme({
  palette: {
    background: {
      default: grey[500]
    },
    primary: {
      main: '#26a69a'
    },
    secondary: {
      main: '#424242'
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