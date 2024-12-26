import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Grid, Typography } from '@mui/material';
import TimeZone from './TimeZone';
import SelecteTime from './SelecteTime';

// Define the reference date (2024-11-27)
const referenceDate = dayjs('2024-11-27');

const SelectDate: React.FC = () => {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <Box sx={{ padding: 4 }}>
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        sx={{
          display: 'flex',
          flexDirection: selectedDate ? 'row' : 'column', // Conditionally change layout based on selectedDate
        }}
      >
        {/* Calendar Section */}
        <Grid
          item
          xs={12}
          md={selectedDate ? 7 : 12} // Adjust the layout based on selectedDate
          sx={{
            flex: 1,
            transition: 'width 0.3s ease', // Smooth transition for the width change
            width: selectedDate ? '300px' : '100%', // Adjust the width when date is selected
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <Typography variant="h6" textAlign="center" mb={2}>
                Select a Date
              </Typography>
              <DateCalendar
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                shouldDisableDate={(date) =>
                  date.isBefore(referenceDate, 'day') || date.day() === 0 // Disable Sundays
                }
                sx={{
                  '& .MuiDayPicker-day': {
                    '&.Mui-disabled': {
                      backgroundColor: 'lightgray',
                      color: 'gray',
                    },
                    '&:not(.Mui-disabled)': {
                      backgroundColor: 'blue',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkblue',
                        color: 'white',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'blue',
                        color: 'white',
                      },
                    },
                  },
                }}
              />
            </Box>
          </LocalizationProvider>
          <Box mt={4}>
            <TimeZone />
          </Box>
        </Grid>

        {/* Time Selection Section */}
        {selectedDate && (
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: selectedDate ? 1 : 0, // Smooth appearance
              transition: 'opacity 0.5s ease',
              paddingLeft: { md: 4 },
              width: selectedDate ? '300px' : '100%', // Adjust the width when date is selected
            }}
          >
            <Typography variant="h6" textAlign="center" mb={2}>
              Select a Time
            </Typography>
            <SelecteTime selectedDate={selectedDate} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SelectDate;
