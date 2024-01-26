import React from 'react';
import TableUsers from '../../Components/DashBoardComponents/Users/TableUsers';
import { Box } from '@mui/material';
const Users = () => {
  return (
    <Box sx={{height: '100%'}}>
      <TableUsers/>
    </Box>
  )
}

export default Users