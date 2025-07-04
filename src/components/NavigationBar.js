import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const NavigationBar = () => {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await signOut(auth);
    handleMenuClose();
    navigate('/login');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Links for unauthenticated users
  const publicLinks = [
    { title: 'Home', path: '/' },
  ];

  // Links for authenticated users
  const privateLinks = [
    { title: 'Home', path: '/' },
    { title: 'Jobs', path: '/jobs' },
    { title: 'Skill Courses', path: '/courses' },
    { title: 'Resume Builder', path: '/resume-builder' },
    { title: 'Interview Tips', path: '/interview-tips' },
  ];

  const navButtonStyles = {
    fontSize: '1.5rem',
    px: 4,
    py: 1.5,
    textTransform: 'none',
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {(user ? privateLinks : publicLinks).map(({ title, path }) => (
          <ListItem
            button
            component={Link}
            to={path}
            key={title}
          >
            <ListItemText primary={title} />
          </ListItem>
        ))}
        {!user ? (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/signup">
              <ListItemText primary="Signup" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={4}>
        <Toolbar>
          <Typography
            variant="h3"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', userSelect: 'none' }}
          >
            Pro<span style={{ color: 'limegreen' }}>Connect</span>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer(true)}
                aria-label="open navigation menu"
                size="large"
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <>
              {(user ? privateLinks : publicLinks).map(({ title, path }) => (
                <Button
                  key={title}
                  color="inherit"
                  component={Link}
                  to={path}
                  sx={navButtonStyles}
                >
                  {title}
                </Button>
              ))}

              {!user ? (
                <>
                  <Button color="inherit" component={Link} to="/login" sx={navButtonStyles}>
                    Login
                  </Button>
                  <Button color="inherit" component={Link} to="/signup" sx={navButtonStyles}>
                    Signup
                  </Button>
                </>
              ) : (
                <>
                  <IconButton
                    onClick={handleMenuOpen}
                    color="inherit"
                    size="large"
                    aria-controls={anchorEl ? 'user-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                    sx={{ ml: 3 }}
                  >
                    <Avatar
                      alt={user.displayName || user.email}
                      src={user.photoURL || ''}
                      sx={{ width: 48, height: 48 }}
                    />
                  </IconButton>
                  <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavigationBar;
