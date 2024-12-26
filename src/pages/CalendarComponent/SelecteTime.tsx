import React, { useState } from "react";
import { List, ListItem, Typography, Box, Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";

interface SelecteTimeProps {
  selectedDate: Dayjs | null; // Allow null in case the date is not set
}

const SelecteTime: React.FC<SelecteTimeProps> = ({ selectedDate }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();

  const generateTimes = (start: string, interval: number, end: string) => {
    const times: string[] = [];
    let [hour, minute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
  
    while (hour < endHour || (hour === endHour && minute <= endMinute)) {
      // Use "HH:mm" format for 24-hour time
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push(formattedTime);
  
      minute += interval;
      if (minute >= 60) {
        hour += 1;
        minute -= 60;
      }
    }
  
    return times;
  };
  

  const times = generateTimes("10:00", 30, "18:00");

  const handleNextClick = () => {
    if (selectedTime && selectedDate) {
      navigate("/getdetails", {
        state: { selectedDate: selectedDate.format("YYYY-MM-DD"), selectedTime }, // Ensure selectedDate is formatted correctly
      });
    }
  };

  return (
    <Box
      sx={{
        maxHeight: "300px",
        overflowY: "auto",
        padding: "8px",
      }}
    >
      {selectedDate ? (
        <Typography variant="caption" fontWeight="700">
          {selectedDate.format("MMMM DD, YYYY")}
        </Typography>
      ) : (
        <Typography variant="caption" fontWeight="700" color="error">
          Date not selected
        </Typography>
      )}

      <List>
        {times.map((time, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            {selectedTime !== time && (
              <ListItem
                component="button"
                onClick={() => setSelectedTime(time)}
                sx={{
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: selectedTime === time ? "#0F63A5" : "#fff",
                  color: selectedTime === time ? "#fff" : "#0F63A5",
                  border: selectedTime === time
                    ? "2px solid #0F63A5"
                    : "2px solid transparent",
                  fontWeight: "700",
                  fontSize: "16px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#e0f7fa",
                    color: "#0F63A5",
                    border: "2px solid #0F63A5",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                {time}
              </ListItem>
            )}

            {selectedTime === time && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    padding: "10px",
                    fontWeight: "700",
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                >
                  {selectedTime}
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "10px",
                    fontWeight: "700",
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Box>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default SelecteTime;
