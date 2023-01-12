import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import LogoDevIcon from '@mui/icons-material/LogoDev';

function AppBar() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('Ian');
  const [lastName, setLastName] = useState('Spiker');
  const [email, setEmail] = useState('iandspiker@gmail.com');

  const [selectedOption, setSelectedOption] = useState('home');
  const [selectedPostition, setSelectedPosition] = useState('16.25rem');

  return (
    <Box sx={styles.root}>
      <LogoDevIcon sx={styles.logo} />
      <Box sx={styles.initialsCircle}>
        <Box sx={styles.initialsCircleInner}>
          <Typography
            sx={styles.initials}
          >{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</Typography>
        </Box>
      </Box>
      <Typography
        sx={{ ...styles.nameText, ...styles.lightColor }}
      >{`${firstName} ${lastName}`}</Typography>
      <Typography sx={{ ...styles.emailText, ...styles.lightColor }}>
        {email}
      </Typography>
      <Box sx={{ ...styles.highlighter, top: selectedPostition }}>
        <Box sx={styles.highlighterOverlayTop} />
        <Box sx={styles.highlighterUnderlay} />
        <Box sx={styles.highlighterCore} />
        <Box sx={styles.highlighterUnderlay} />
        <Box sx={styles.highlighterOverlayBottom} />
      </Box>
      <List sx={styles.list}>
        <ListItem
          onClick={() => {
            setSelectedOption('home');
            setSelectedPosition('16.25rem');
            navigate('/');
          }}
          sx={styles.listItem}
        >
          <ListItemIcon>
            <HomeIcon
              sx={
                selectedOption === 'home' ? styles.darkColor : styles.lightColor
              }
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              ...(selectedOption === 'home'
                ? styles.darkColor
                : styles.lightColor),
              ...styles.listOption,
            }}
          >
            Home
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            setSelectedOption('profile');
            setSelectedPosition('19.25rem');
            navigate('/profile');
          }}
          sx={styles.listItem}
        >
          <ListItemIcon>
            <AccountBoxIcon
              sx={
                selectedOption === 'profile'
                  ? styles.darkColor
                  : styles.lightColor
              }
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              ...(selectedOption === 'profile'
                ? styles.darkColor
                : styles.lightColor),
              ...styles.listOption,
            }}
          >
            Profile
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            setSelectedOption('analytics');
            setSelectedPosition('22.25rem');
            navigate('/analytics');
          }}
          sx={styles.listItem}
        >
          <ListItemIcon>
            <AnalyticsIcon
              sx={
                selectedOption === 'analytics'
                  ? styles.darkColor
                  : styles.lightColor
              }
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              ...(selectedOption === 'analytics'
                ? styles.darkColor
                : styles.lightColor),
              ...styles.listOption,
            }}
          >
            Analytics
          </ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            setSelectedOption('settings');
            setSelectedPosition('25.25rem');
            navigate('/settings');
          }}
          sx={styles.listItem}
        >
          <ListItemIcon>
            <SettingsApplicationsIcon
              sx={
                selectedOption === 'settings'
                  ? styles.darkColor
                  : styles.lightColor
              }
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              ...(selectedOption === 'settings'
                ? styles.darkColor
                : styles.lightColor),
              ...styles.listOption,
            }}
          >
            Settings
          </ListItemText>
        </ListItem>
      </List>
      <Box sx={styles.logout}>
        <List>
          <ListItem sx={styles.listItem}>
            <ListItemIcon>
              <LogoutIcon sx={styles.lightColor} />
            </ListItemIcon>
            <ListItemText sx={{ ...styles.lightColor, ...styles.listOption }}>
              Logout
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box sx={styles.subOptions}>
        <Typography variant='caption' sx={styles.subOption}>
          Contact
        </Typography>
        <Typography variant='caption' sx={styles.subOption}>
          Privacy
        </Typography>
      </Box>
    </Box>
  );
}

const styles = {
  root: {
    backgroundColor: 'rgb(237,62,46)',
    width: '14rem',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1',
  },
  list: {
    position: 'fixed',
    top: '18rem',
    left: '2rem',
    zIndex: '2',
  },
  listItem: {
    cursor: 'pointer',
  },
  highlighter: {
    position: 'fixed',
    left: '2rem',
    transition: 'top ease-in 0.2s',
  },
  highlighterCore: {
    height: '2.5rem',
    width: '12rem',
    zIndex: '0',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: '#f4f6fc',
  },
  highlighterUnderlay: {
    height: '2.5rem',
    width: '12rem',
    zIndex: '0',
    backgroundColor: '#f4f6fc',
  },
  highlighterOverlayTop: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgb(237,62,46)',
    height: '2.5rem',
    width: '12rem',
    borderBottomRightRadius: '20px',
  },
  highlighterOverlayBottom: {
    position: 'absolute',
    top: '5rem',
    backgroundColor: 'rgb(237,62,46)',
    height: '2.5rem',
    width: '12rem',
    borderTopRightRadius: '20px',
  },
  darkColor: {
    color: '#67666e',
    transition: 'color ease-in 0.35s',
  },
  lightColor: {
    color: '#f4f6fc',
  },
  listOption: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  logout: {
    position: 'fixed',
    top: '85vh',
    left: '2rem',
  },
  subOptions: {
    width: '8rem',
    position: 'fixed',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    top: '95vh',
    left: '2rem',
  },
  subOption: {
    cursor: 'pointer',
    color: '#f4f6fc9f',
    '&:hover': {
      color: '#f4f6fc',
    },
  },
  initialsCircle: {
    position: 'fixed',
    top: '6rem',
    left: '4rem',
    backgroundColor: 'rgb(255,255,255,0.5)',
    height: '6rem',
    width: '6rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 1rem 0 rgb(0,0,0,0.3)',
  },
  initialsCircleInner: {
    backgroundColor: 'rgb(237,62,46, 0.7)',
    height: '5rem',
    width: '5rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: '3.25rem',
    fontWeight: '900',
    color: 'rgb(255,255,255,0.5)',
  },
  nameText: {
    position: 'fixed',
    top: '12.5rem',
    textAlign: 'center',
    width: '14rem',
  },
  emailText: {
    position: 'fixed',
    top: '14.25rem',
    textAlign: 'center',
    width: '14rem',
    fontSize: '0.8rem',
  },
  logo: {
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    width: '2rem',
    height: '2rem',
    color: 'rgb(237,62,46)',
    border: '1px solid #67666e',
    borderRadius: '10px',
    backgroundColor: '#f4f6fc',
    boxShadow: '0 0 1rem 0 rgb(0,0,0,0.3)',
  },
};

export default AppBar;
