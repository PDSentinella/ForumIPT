import { Check, Save } from '@mui/icons-material';
import { Box, CircularProgress, Fab } from '@mui/material'
import { green } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'

function UserActions({params, rowId, setRowId}) {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleSubmit = async () => {
      setLoading(true);
      const {genero, admin_privileges, user_id} = params.row;
      //const result = await updateUser({genero: genero, admin_privileges: admin_privileges, user_id: user_id});
      console.log({genero: genero, admin_privileges: admin_privileges, user_id: user_id});
      setLoading(false);
      setSuccess(true)
      setRowId(null)

    };

    useEffect(() => {
      if (rowId === params.id && success) setSuccess(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowId]);
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
        <Check />
      </Fab>
    ) : (
      <Fab
        color="primary"
        sx={{
          width: 40,
          height: 40,
        }}
        disabled={params.id !== rowId || loading}
        onClick={handleSubmit}

      >
        <Save />
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
  )
}
 
export default UserActions