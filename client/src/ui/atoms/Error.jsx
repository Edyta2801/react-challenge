import { Box, Typography } from '@mui/material';
import unknown_error from '../../../src/assets/unknown_error.png'

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: '64px',
              fontWeight: '700',
              mt: 1,
              lineHeigh: '76.8px',
              marginBottom:'60px',
            }}
          >
            Error
          </Box>
          <Box
            component="img"
            sx={{
              height: 248,
              width: 248,
            }}
            alt="Error."
            src={unknown_error}
          />

          <Box
            sx={{
              
              p: 0.5,
              borderRadius: '5px',
              color: 'rgba(51, 51, 51, 0.5)',
              fontWeight: 'normal',
              display: 'flex',
              fontSize: '19.2px',
              alignItems: 'center',
              lineHeigh: '29px',
            }}
          >
            Wystąpił nieoczekiwany błąd
          </Box>
        </Box>
      )}
    </Box>
  );
};
