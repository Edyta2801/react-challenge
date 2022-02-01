import { createTheme } from '@mui/material';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
      white: '#FFFFFF',
      light: '#E8EAF6',
      darkGrey: '#33333340',
      violet: '#334ACC',
      violetDark: '#223289',
      yellowBrown: '#B28C09',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      contrastText: '#fff',
      violetLight: '#E8EAF6',
      violetDark: '#C5CAE9',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5D5D',
      light: '#FCECE6',
      contrastText: '#fff',
      background: '#FDE8E0',
    },
    success: {
      main: '#00A980',
      light: '#DBEBDB',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
    disabled: {
      light: 'rgba(51, 51, 51, 0.07)',
      grey: 'rgba(51, 51, 51, 0.25);',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontFamily: 'Roboto',
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.074rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.728rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.44rem',
    },
    h5: {
      fontSize: '1.44rem',
    },
    h6: {
      fontSize: '1.44rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey['500'],
          ':hover': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
          },
          '&.Mui-selected': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            borderBottom: '2px solid #0666eb',
            color: theme.palette.primary.main,
          },
          '.MuiTypography-root': {
            fontWeight: '500',
            fontSize: '14px',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#33333350',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '40px 32px',
          border: 'none',
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '0',
          fontSize: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '700',
          height: '45px',
          fontSize: '15px',

          '&.iconButton': {
            minWidth: '45px',
            minHeight: '40px',
            padding: '0',
            paddingRight: '10px',
          },
          '&.MuiButton-contained.MuiButton-containedPrimary': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.light,
            '&:hover, &:active': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.text.light,
            },
            '&:disabled': {
              backgroundColor: theme.palette.disabled.grey,
              color: theme.palette.text.darkGrey,
            },
          },

          '&.MuiButton-outlined.MuiButton-outlinedPrimary': {
            backgroundColor: theme.palette.primary.violetLight,
            color: theme.palette.text.violet,

            '&:hover, &:active': {
              backgroundColor: theme.palette.primary.violetDark,
              color: theme.palette.text.violetDark,
            },
            '&:disabled': {
              backgroundColor: theme.palette.disabled.light,
              color: theme.palette.text.darkGrey,
            },
          },
          '&.MuiButton-contained.MuiButton-containedError, &:active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,

            '&:hover': {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            },

            '&:disabled': {
              backgroundColor: theme.palette.disabled.light,
              color: theme.palette.disabled.grey,
            },
          },

          '&.MuiButton-outlined.MuiButton-outlinedError': {
            border: '1px solid #FF5D5D',
            color: theme.palette.error.main,
            // fontWeight: '700',
            fontSize: '15px',
            '&:hover, &:active': {
              backgroundColor: theme.palette.error.background,
              color: theme.palette.error.main,
            },
            '&:disabled': {
              color: theme.palette.text.darkGrey,
              borderColor: theme.palette.text.darkGrey,
              backgroundColor: theme.palette.text.white,
            },
          },
          '&.MuiButton-contained.MuiButton-containedSuccess, &:active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,

            '&:hover': {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
            },

            '&:disabled': {
              backgroundColor: theme.palette.disabled.light,
              color: theme.palette.disabled.grey,
            },
          },

          '&.MuiButton-outlined.MuiButton-outlinedSuccess': {
            border: '1px solid theme.palette.success.main',
            color: theme.palette.success.main,

            fontSize: '15px',
            '&:hover, &:active': {
              backgroundColor: theme.palette.success.light,
              color: theme.palette.success.main,
            },
            '&:disabled': {
              color: theme.palette.text.darkGrey,
              borderColor: theme.palette.text.darkGrey,
              backgroundColor: theme.palette.text.white,
            },
          },
          '&.MuiButton-contained.MuiButton-containedWarning, &:active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.text.yellowBrown,

            '&:hover': {
              backgroundColor: theme.palette.warning.main,
              color: theme.palette.warning.contrastText,
            },

            '&:disabled': {
              backgroundColor: theme.palette.disabled.light,
              color: theme.palette.disabled.grey,
            },
          },

          '&.MuiButton-outlined.MuiButton-outlinedWarning': {
            border: '1px solid theme.palette.warning.main',
            color: theme.palette.warning.main,

            fontSize: '15px',
            '&:hover, &:active': {
              backgroundColor: theme.palette.warning.light,
              color: theme.palette.warning.main,
            },
            '&:disabled': {
              color: theme.palette.text.darkGrey,
              borderColor: theme.palette.text.darkGrey,
              backgroundColor: theme.palette.text.white,
            },
          },
        },
      },
    },
  },
});

export { theme };
