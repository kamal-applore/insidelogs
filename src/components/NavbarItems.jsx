/* eslint-disable */
import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'
import CustomLabel from './CustomLabel'
import { ROUTES } from '../shared/constants'
import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  label: {
    '&:hover': {
      color: theme.palette.primary.dark,
      transition: 'all 0.4s ease 0s',
    },
    color: theme.palette.common.black,
    textDecoration: 'none',
    paddingTop: '11px',
    cursor: 'pointer',
    fontSize: '19px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      paddingTop: '21px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '19.5px',
      paddingRight: '28px',
      paddingTop: '0px',
    },
  },
  active: {
    color: theme.palette.primary.dark,
    textDecoration: 'underline',
    [theme.breakpoints.up('lg')]: {
      textDecoration: 'none',
    },
  },
  divider: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      width: '100%',
      height: '2px',
      backgroundColor: theme.palette.primary.dark,
      marginTop: '8px',
    },
  },
}))

export default () => {
  const classes = useStyles()
  const item = [
    { navItem: 'Home', url: ROUTES.HOME },
    { navItem: 'About', url: ROUTES.ABOUT },
    { navItem: 'Blog', url: ROUTES.BLOG },
    { navItem: 'Contact', url: ROUTES.CONTACT },
  ]
  const history = useHistory()
  const location = useLocation()
  return (
    <>
      {item.map((item, index) => {
        const isActive = location.pathname === item.url
        return (
          <div key={index} onClick={() => history.push(item.url)}>
            <CustomLabel
              label={item.navItem}
              className={`${isActive ? classes.active + ' ' + classes.label : classes.label}`}
              underline={isActive ? <Divider className={classes.divider} /> : null}
            />
            {/* {isActive ? <Divider className={classes.divider} /> : null} */}
          </div>
        )
      })}
    </>
  )
}
