import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Typography, Select, MenuItem, SelectChangeEvent, Box } from '@mui/material';



dayjs.extend(utc);
dayjs.extend(timezone);
const TimeZone:React.FC = () => {
    // Initial state: Indian timezone (Asia/Kolkata)
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>('Asia/Kolkata');
  const [currentTime, setCurrentTime] = useState(dayjs().tz('Asia/Kolkata'));

  // List of timezones
  const timeZones = [
    'Africa/Abidjan', 'America/New_York', 'America/Los_Angeles', 'Asia/Tokyo', 'Europe/London', 'Europe/Paris', 'Australia/Sydney',
    'Asia/Kolkata', 'Asia/Dubai', 'America/Chicago', 'Europe/Berlin', 'Asia/Shanghai', 'Pacific/Auckland', 'Africa/Johannesburg'
  ];

  // Update current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().tz(selectedTimeZone));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval
  }, [selectedTimeZone]);

  // Handle time zone selection
  const handleTimeZoneChange = (event: SelectChangeEvent<string>) => {
    setSelectedTimeZone(event.target.value);
    setCurrentTime(dayjs().tz(event.target.value)); // Update time for the new timezone
  };

  return (
    <Box>
      {/* Display the current time with the dropdown */}
      <Typography variant="body2" sx={{ marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           Time Zone: {currentTime.format('HH:mm:ss')} (
          <Select
            value={selectedTimeZone}
            onChange={handleTimeZoneChange}
            variant="standard"
            sx={{
              marginLeft: 1,
              fontSize: 'inherit',
              color: 'inherit',
              '& .MuiSelect-icon': {
                top: '50%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            {timeZones.map((tz) => (
              <MenuItem key={tz} value={tz}>
                {tz}
              </MenuItem>
            ))}
          </Select>
          )
        </Typography>

        
    </Box>
  )
}

export default TimeZone
