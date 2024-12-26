import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid } from '@mui/material';
import WatchIcon from '@mui/icons-material/Watch';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { rw } from '../../assets';

const Profile: React.FC = () => {
  return (
    <Box sx={{  }}>
      <CardContent>
       
          {/* Profile Image and Name */}
          <Box sx={{ textAlign:'start' }}>
            <Avatar alt="Brigadier Inder Sethi" src={rw} sx={{ width: 60, height: 60 }} />
          </Box>
          <Box sx={{ textAlign:'start' }}>
            <Typography variant="h6">Rajiv Williams</Typography>
            <Typography variant="body2" color="text.secondary">15 Minute Meeting</Typography>
          </Box>
        

        {/* Icons and Text */}
        <Box sx={{ display: 'flex', alignItems: 'start', marginTop: 2 }}>
          <AccessTimeIcon sx={{ marginRight: 1 }} />
          <Typography variant="body2">30 minutes</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <PhoneIcon sx={{ marginRight: 1 }} />
          <Typography variant="body2">Phone call</Typography>
        </Box>

        {/* Message */}
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 ,textAlign:'start'}}>
          Please message me on <WhatsAppIcon sx={{ fontSize: 16, marginRight: 1 }} />Whatsapp 10 minutes prior to the meeting that you will be calling me, so that I can recognize your number.
        </Typography>
      </CardContent>
    </Box>
  );
}

export default Profile;
