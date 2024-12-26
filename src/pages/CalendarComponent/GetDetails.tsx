import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
  Container,
  Button,
  TextareaAutosize,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { rw } from "../../assets"; // Assuming this is your image path
import CustomInput from "../../components/Inputs/CustomInput"; // Assuming you have this component
import dayjs from "dayjs";
import { calendarForm } from "../../api/services"; // API call
import { useMutation } from "react-query";

const GetDetails: React.FC = () => {
  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {};

  // Ensure selectedDate is a valid Dayjs object
  const formattedDate = selectedDate ? dayjs(selectedDate) : null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseColor, setResponseColor] = useState<"green" | "red">("red");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Mutation to submit form data
  const mutation = useMutation(calendarForm, {
    onSuccess: () => {
      setIsSubmitting(false);
      setResponseMessage("Successfully scheduled the event.");
      setResponseColor("green");
    },
    onError: (error: any) => {
      setIsSubmitting(false);
      setResponseMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      setResponseColor("red");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setResponseMessage("");

    // Prepare the form data to send to the API
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: formattedDate ? formattedDate.toISOString() : "",
      time: selectedTime || "",
    };

    // Call the API to submit the form
    mutation.mutate(data);
  };

  return (
    <Container>
      <Box sx={{ padding: "20px" }}>
        <Card>
          <CardContent>
            <Grid container>
              {/* Profile Section */}
              <Grid item xs={12} md={6}>
                <Box>
                  <CardContent>
                    <Box sx={{ textAlign: "start" }}>
                      <Avatar
                        alt="Rajiv Williams"
                        src={rw}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Typography variant="h6">Rajiv Williams</Typography>
                      <Typography variant="body2" color="text.secondary">
                        15 Minute Meeting
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                    >
                      <CalendarMonthIcon sx={{ marginRight: 1 }} />
                      <Typography variant="body2">
                        <strong>Date:</strong>{" "}
                        {formattedDate
                          ? formattedDate.format("YYYY-MM-DD")
                          : "Not Selected"}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                    >
                      <AccessTimeIcon sx={{ marginRight: 1 }} />
                      <Typography variant="body2">
                        <strong>Time:</strong> {selectedTime || "Not Selected"}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                    >
                      <PhoneIcon sx={{ marginRight: 1 }} />
                      <Typography variant="body2">Phone call</Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: 2, textAlign: "start" }}
                    >
                      Please message me on{" "}
                      <WhatsAppIcon sx={{ fontSize: 16, marginRight: 1 }} />{" "}
                      WhatsApp 10 minutes prior to the meeting that you will be
                      calling me, so that I can recognize your number.
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>

              {/* Form Section */}
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "start", mb: 3 }}
                  >
                    Enter Details
                  </Typography>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <CustomInput
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />

                    {/* Email Input */}
                    <CustomInput
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />

                    {/* Message Textarea */}
                    <Typography
                      variant="caption"
                      paragraph
                      sx={{
                        marginBottom: 2,
                        textAlign: "start",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Please share anything that will help prepare for our
                      meeting.
                    </Typography>
                    <TextareaAutosize
                      name="message"
                      minRows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here"
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        marginBottom: "10px",
                      }}
                    />

                    <Typography
                      variant="caption"
                      paragraph
                      sx={{
                        fontSize: "10px",
                        fontWeight: "600",
                        textAlign: "justify",
                      }}
                    >
                      By proceeding, you confirm that you have read and agree
                      to the Terms of Use and Privacy Notice.
                    </Typography>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 5 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Scheduling..." : "Schedule Event"}
                    </Button>
                  </form>

                  {/* Response Message */}
                  {responseMessage && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: responseColor,
                        marginTop: 2,
                      }}
                    >
                      {responseMessage}
                    </Typography>
                  )}
                </CardContent>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default GetDetails;
