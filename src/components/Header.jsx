/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import { Box, Hidden, makeStyles } from '@material-ui/core'
import NavbarItems from './NavbarItems'
// import Logo from './Images/Logo'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '9.85px 22.92px 5.73px 15.06px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.up('md')]: {
      padding: '15px 22px 6px 22px',
      boxShadow: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '26px 97px 0px 145px',
    },
  },
  navBarList: {
    paddingTop: '12px',
    [theme.breakpoints.up('lg')]: {
      paddingTop: '22px',
    },
  },
  navbarItems: {
    position: 'relative',
  },

  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '500px',
    position: 'absolute',
    top: '80px',
    left: '-100%',
    opacity: 1,
    transition: 'all 0.5s ease',
  },
  active: {
    background: theme.palette.common.white,
    left: 0,
    opacity: 1,
    transition: 'all 0.5s ease',
    zIndex: 1,
    height: '100vh',
    top: '58px',
  },
  icon: {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(-26%, 38%)',
    cursor: 'pointer',
  },
}))
export default () => {
  const classes = useStyles()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <Hidden mdDown>
        <Box display="flex" className={classes.root}>
          <Box flexGrow={1}>{/* <Logo /> */}</Box>
          <Box display="flex" className={classes.navBarList}>
            <NavbarItems />
          </Box>
        </Box>
      </Hidden>
      <Hidden lgUp>
        <Box className={classes.root}>
          <nav className={classes.navbarItems}>
            <Box flexGrow={1}>{/* <Logo /> */}</Box>
            <div className={classes.icon} onClick={showSidebar}>
              {sidebar ? <CloseIcon color="primary" /> : <MenuIcon color="primary" />}
            </div>
          </nav>
        </Box>
        <ul className={sidebar ? `${classes.navMenu} ${classes.active}` : classes.navMenu}>
          <NavbarItems />
        </ul>
      </Hidden>
    </>
  )
}
