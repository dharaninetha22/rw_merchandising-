import { Box, Card, CardContent, Container, Grid } from '@mui/material'
import React from 'react'
import Profile from './Profile'
import SelectDate from './SelectDate'

const CalendarComponent:React.FC = () => {
  return (
    <Container>
        <Box sx={{marginTop:5}}>

            <Card >
                <CardContent>

                    <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                        <Profile/>
                        </Grid>
                        <Grid item xs={7} sx={{textAlign:'start'}}>
                        <SelectDate/>
                        </Grid>
                        
                    </Grid>
                    </Box>
                </CardContent>

            </Card>
        </Box>

    </Container>
  )
}

export default CalendarComponent
