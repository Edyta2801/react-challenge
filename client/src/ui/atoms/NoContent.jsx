import { Box, Typography } from '@mui/material';
import no_content from '../../../src/assets/no_content.png'



export const NoContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
    <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'center' },
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
            NoContent
          </Box>
          <Box
            component="img"
            sx={{
              height: 248,
              width: 248,
            }}
            alt="Error."
            src={no_content}
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
            Brak danych do wyświetlania
          </Box>
        </Box>
        </Box>
  );
};