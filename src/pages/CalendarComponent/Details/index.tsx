import { Box, Card, CardContent, Container, Grid } from '@mui/material'
import React from 'react'
import MeetingDetails from './MeetingDetails'
import PersonalDetails from './PersonalDetails'

const Details:React.FC = () => {
  return (
    <Container>
    <Box sx={{marginTop:5}}>

        <Card sx={{width:'800px'}}>
            <CardContent>

                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                    <MeetingDetails selectedDate={null} selectedTime={null}/>
                    </Grid>
                    <Grid item xs={7} sx={{textAlign:'start'}}>
                    <PersonalDetails/>
                    </Grid>
                    
                </Grid>
                </Box>
            </CardContent>

        </Card>
    </Box>

</Container>
  )
}

export default Details
