// UserActionsRemove.js

import { ClearOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import React, { useState } from 'react';
import { DeleteUserById } from '../../../services/DashBoard.api';

function UserActionsRemove({ params, rowId, setRowId, setusersChangeUpdated, usersChangeUpdated }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRemoveClick = async (event) => {
    // Prevent the click event from propagating to the parent DataGrid
    event.stopPropagation();

    setLoading(true);
    const { user_id } = params.row;
    const result = await DeleteUserById({ 'user_id': user_id });
    if (result.ok) {
      setLoading(false);
      setSuccess(true);
      setRowId(null);
      //desta forma não é preciso dar reload
      const update = usersChangeUpdated + 1;
      setusersChangeUpdated(update);
    }
  };

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative',
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
        >
          <ClearOutlined />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={loading}
          onClick={(event) => handleRemoveClick(event)}
        >
          <ClearOutlined />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
}

export default UserActionsRemove;
