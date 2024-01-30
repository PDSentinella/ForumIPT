import React from 'react';
import { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { GetCounts } from '../../../services/DashBoard.api'
import { Link } from 'react-router-dom';

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

  const [Counts, setCounts] = useState([]);

  useEffect(() => {
    async function getCounts() {
      const counts = await GetCounts();
      const entries = Object.entries(counts);
      console.log(entries)
      setCounts(entries);
    }

    getCounts();
  },[]);

  return (
    <>
    {
      Counts.length === 0 ? <Box sx={{ my: 2 , display: 'flex', width: '100%', justifyContent: 'center' }}>
      <CircularProgress color="success" />
    </Box> :   <Container sx={{mt: 3}} maxWidth="md">
      <Grid container spacing={2}>
      {Counts.map((value, index) => (
        <Grid item xs={8} sm={6} md={4} lg={4}>
          <Paper rounded elevation={6} sx={{padding: {sx: '2rem'}}}>
            <Typography variant='h5' sx={{ textAlign: 'center', margin: 'auto' }}>
              {
                value[0] === 'userscount' ? 'Users' :  value[0] === 'publicationcount' ? 'Publicações' : value[0] === 'comentarioscount' ? 'Comentarios' : value[0] === 'canaiscount' ? 'Canais' : ''
              }
            </Typography>
            <Box sx={{ margin: 'auto' }}>
              <PieChart
                series={[{ data: [{ value: value[1] }], innerRadius: 80,}]}
                {...size}
                sx={{ display: 'flex', justifyContent: 'center', marginRight: {xs: '2.5rem',sm: '5rem', md: '4rem' } , marginLeft: {sm: '0rem', md: '0rem', lg: '2rem'} }}
              >
                <PieCenterLabel>{value[1]}</PieCenterLabel>
              </PieChart>
            </Box>
          </Paper>
        </Grid>
      ))}
        {/* Grid item com o paper com links para as respetivas opções*/}
        <Grid item xs={8} sm={12} md={8}>  {/* Neste caso o lg não será necessario porque o md é suficiente a partir dos 900*/}
        <Paper rounded elevation={6} sx={{padding: {sx: '2rem'}}}>
          <Typography sx={{ p: 1}} variant='h6'>Atalhos</Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', p: 2.5}}>
          <Link to="/DashBoard/geral"><Typography variant='body1'>Geral</Typography></Link>
          <Link to="/Dashboard/users"><Typography variant='body1'>Gestão de utilizadores</Typography></Link>
          <Link to="/Dashboard/pubs"><Typography variant='body1'>Gestão de Publicações</Typography></Link>
          <Link to="/Dashboard/canais"><Typography variant='body1'>Gestão de canais</Typography></Link>
          </Box>
        </Paper>
        </Grid>
      </Grid>
    </Container>
    }
  
  </>
  );
}

export default Charts;
