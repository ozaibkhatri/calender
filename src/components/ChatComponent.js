import { Box, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react';

const ChatComponent = () => {
  return (
    <Box sx={{ p: 2,marginLeft:'30rem',marginTop:'-3rem' ,width:'30rem' }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6">Chat with Jastin Pot</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
          <CardMedia
            component="img"
            src="https://icons.iconarchive.com/icons/pictogrammers/material-light/256/clock-icon.png"
            alt="Clock"
            sx={{ width: 25, height: 25, mr: 2 }}
          />
          <Typography variant="body1">30 mins appointment</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component="img"
            src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/google-meet-icon.png"
            alt="Meet Video"
            sx={{ width: 25, height: 25, mr: 2 }}
          />
            <Typography variant="body1">Google Meet video conference info added after booking</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatComponent;

