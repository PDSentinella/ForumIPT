import React from 'react'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (index) => () => {
    
    if (index === 5) {
      localStorage.setItem("user", "");
      window.location.reload(false);
    }
    setAnchorEl(null);
  };

  return (
    <div className='flex justify-between mx-4 py-4 items-center'>
      <div className='flex items-center'>
        <a href="/" className="flex items-center cursor-pointer">
          <img alt="profile_image" className='h-12 md:h-24' src='/icons/ipt.png'></img>
        </a>
      </div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="medium"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar src="https://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2020/03/26150830/Anfernee-Simons.jpg" sx={{ width: 42, height: 42 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={() => handleClose(0)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/profile"><MenuItem onClick={() => handleClose(1)}>
          <Avatar src="https://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2020/03/26150830/Anfernee-Simons.jpg" /> Profile
        </MenuItem></Link>
        <Divider />
        <MenuItem onClick={handleClose(5)}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header