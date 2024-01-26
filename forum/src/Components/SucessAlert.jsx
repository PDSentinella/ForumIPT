import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SucessAlert({ open, handleClose }) {

  return (
    <>
   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
       Utilizador registado com sucesso!
      </Alert>
    </Snackbar>
    </>
  )
}

export default SucessAlert