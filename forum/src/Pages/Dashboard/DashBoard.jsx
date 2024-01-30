import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar, Button } from '@mui/material';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';



import GeralComponent from './Geral';
import UsersComponent from './Users';
import PubsComponent from './Pubs';
import CanaisComponent from './Canais';


// Tamanho do drawer aberto
const drawerWidth = 240;

// Transições do drawer
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#88b77b', // cor do IPT Modificar quando o drawer esta fechado
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: '#88b77b', // cor do IPT Modificar quando o drawer esta aberto
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    backgroundColor: '#88b77b',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DashBoard(props) {
  const navigate = useNavigate();

  function handleClose(){
    localStorage.removeItem("user");
    setUser(null);
    navigate('/Login');
  }


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({})

  // Temos de ir buscar as propriedades do user ao local storage.
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  },[]);


  // funções para tratar de fechar o drawer ou abrir
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // componente
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {user ? `Bem vindo de volta ${user.nome}` : 'Bem vindo!'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
          {/*o drawer vai ser constituido por duas listas divididas pelo componente divider*/}
        <Divider />
          {/* Lista de cima -> Vista geral, Users , Pubs, Canais*/}
        <List>
          {['Voltar', 'Vista Geral', 'Users', 'Publicações', 'Canais'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? (
                   <Link to="/"> <SkipPreviousOutlinedIcon sx={{ color: 'gray' }} /> </Link>
                    ) : index === 1 ? (
                      <Link to="geral"> <HomeOutlinedIcon sx={{ color: 'gray' }} /> </Link>
                    ) : index === 2 ? (
                      <Link to="users"> <GroupOutlinedIcon sx={{ color: 'gray' }} /> </Link>
                    ) : index === 3 ? (
                      <Link to="pubs"> <StickyNote2OutlinedIcon sx={{ color: 'gray' }} /> </Link>
                    ) : index === 4 ?  (<Link to="canais"> <StickyNote2OutlinedIcon sx={{ color: 'gray' }} /> </Link>) :  ''
                    }
                  
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
         {/* Lista de baixo -> avatar e log out*/}
        <List>
          {[`${user?.nome}`, 'Log Out'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'gray'
                  }}
                >
                  {index % 2 === 0 ? <Link to="/profile/info"><Avatar src={user ? user.profile_image : ''} /> </Link> : <Button onClick={handleClose}><LogoutOutlinedIcon sx={{color: 'gray'}} /></Button>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3, paddingTop: `calc(${theme.mixins.toolbar.minHeight}px + 8px)`,}}>
        {/* Aqui vão ser inseridos os componentes do lado direito do drawer!*/}
        <Outlet />
      </Box>
    </Box>
  );
}