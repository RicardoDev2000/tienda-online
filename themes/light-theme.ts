import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '##1E1E1E'
    },
    secondary: {
      main: '#3A64D8'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
<<<<<<< HEAD
          fontSize: 40,
=======
          fontSize: 30,
>>>>>>> 5f56bcb (¨mi.primera.tienda¨)
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
<<<<<<< HEAD
      defaultProps: {        
=======
      defaultProps: {
>>>>>>> 5f56bcb (¨mi.primera.tienda¨)
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
<<<<<<< HEAD
          fontSize:16,
          backgroundColor:'white',
          color:'black',
=======
>>>>>>> 5f56bcb (¨mi.primera.tienda¨)
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ":hover": {
<<<<<<< HEAD
            backgroundColor: 'rgba(0,0,0,0.2)',
=======
            backgroundColor: 'rgba(0,0,0,0.05)',
>>>>>>> 5f56bcb (¨mi.primera.tienda¨)
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});