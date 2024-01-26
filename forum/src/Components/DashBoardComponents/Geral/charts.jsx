import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Container, Grid, Typography } from '@mui/material';

const data = [
  { value: 5},
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 35,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function Charts() {
  return (
    <Container sx={{mt: 3}} maxWidth="md">
      <Grid container spacing={2}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={8} sm={6} md={4} lg={4}>
          <Paper elevation={6} sx={{padding: {sx: '2rem'}}}>
            <Typography variant='h5' sx={{ textAlign: 'center', margin: 'auto' }}>
              Users
            </Typography>
            <Box sx={{ margin: 'auto' }}>
              <PieChart
                series={[{ data, innerRadius: 80 }]}
                {...size}
                sx={{ display: 'flex', justifyContent: 'center', marginRight: {xs: '2.5rem'} }}
              >
                <PieCenterLabel>{data[0].value}</PieCenterLabel>
              </PieChart>
            </Box>
          </Paper>
        </Grid>
      ))}
        {/* ... (other grid items) ... */}
      </Grid>
    </Container>
  );
}

export default Charts;
