import React from 'react';
import { Typography, Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

interface MeetingDetailsProps {
  selectedDate: Dayjs | null;
  selectedTime: string | null;
}

const MeetingDetails: React.FC<MeetingDetailsProps> = ({ selectedDate, selectedTime }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h6" gutterBottom>
        Meeting Details
      </Typography>
      <Box>
        <Typography variant="body1">
          {selectedDate ? `Selected Date: ${selectedDate.format('MMMM D, YYYY')}` : 'No date selected'}
        </Typography>
        <Typography variant="body1">
          {selectedTime ? `Selected Time: ${selectedTime}` : 'No time selected'}
        </Typography>
      </Box>
    </Box>
  );
};

export default MeetingDetails;
