import { createTheme, responsiveFontSizes } from "@mui/material";
import { red, grey } from "@mui/material/colors";


const preCustomTheme = createTheme({
  palette: {
    background: {
      default: grey[700]
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


export const customTheme = responsiveFontSizes(preCustomTheme)