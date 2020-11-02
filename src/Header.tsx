import {
    AppBar as MuiAppBar,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
  } from '@material-ui/core';
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import SettingsIcon from '@material-ui/icons/Settings';
  import React from 'react';
  import HelpIcon from '@material-ui/icons/Help';
  
  export interface HeaderProps {
    mostrarOpciones?(show: boolean): void;
    mostrarAyuda?(show: boolean): void;
  }
  
  const Header = (props: HeaderProps): React.ReactElement => {
    const { mostrarOpciones, mostrarAyuda } = props;
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const classes = useStyles();

  
    return (
      <MuiAppBar id="appbar" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.toolbarTitle}>
            Búsqueda de personas
          </Typography>
  
          <IconButton id="show-settings-btn" color="inherit" onClick={() => mostrarOpciones && mostrarOpciones(true)}>
            <SettingsIcon />
          </IconButton>
          
            <>
              <IconButton
                id="user-btn"
                color="inherit"
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem id="logout-btn" onClick={() => console.log('logout')}>
                  Logout
                </MenuItem>
              </Menu>
            </>
          
          <IconButton id="show-help-btn" color="inherit" onClick={() => console.log('ayuda')}>
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    );
  }
  
  const useStyles = makeStyles((_theme) => ({
    toolbarTitle: {
      flexGrow: 1,
    },
    avatar: {
      cursor: 'pointer',
    },
    appHeader:{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
  }));

  export default Header