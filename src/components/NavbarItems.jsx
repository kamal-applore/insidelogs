/* eslint-disable */
import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'
import CustomLabel from './CustomLabel'
import { ROUTES } from '../shared/constants'
import { useHistory, useLocation } from 'react-router-dom'
import { SearchOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  label: {
    '&:hover': {
      transition: 'all 0.4s ease 0s',
      [theme.breakpoints.up('lg')]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: '14px 17px',
        borderRadius: '10px',
        marginRight: '42px',
      },
    },
    color: theme.palette.common.black,
    paddingTop: '20px',
    cursor: 'pointer',
    fontSize: '30px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      paddingTop: '35px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '20px',
      lineHeight: '19.5px',
      paddingRight: '48px',
      paddingTop: '0px',
    },
  },
  active: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('lg')]: {
      textDecoration: 'none',

      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: '14px 17px',
      borderRadius: '10px',
      marginRight: '41px',
    },
    // [theme.breakpoints.up('lg')]: {
    //   textDecoration: 'none',
    //   padding: '14px 17px',
    //   // marginRight: '42px',
    // },
  },
}))

export default () => {
  const classes = useStyles()
  const item = [
    { navItem: 'Home', url: ROUTES.HOME },
    { navItem: 'About', url: ROUTES.ABOUT },
    { navItem: 'Blog', url: ROUTES.BLOG },
    { navItem: 'Contact', url: ROUTES.CONTACT },
    { logo: 'logo' },
  ]
  const history = useHistory()
  const location = useLocation()
  return (
    <>
      {item.map((item, index) => {
        const isActive = location.pathname === item.url
        return (
          <div key={index} onClick={() => history.push(item.url)}>
            {item.logo ? (
              <SearchOutlined />
            ) : (
              <CustomLabel
                label={item.navItem}
                className={`${isActive ? classes.active + ' ' + classes.label : classes.label}`}
                // underline={isActive ? <Divider className={classes.divider} /> : null}
              />
            )}
            {/* {isActive ? <Divider className={classes.divider} /> : null} */}
          </div>
        )
      })}
    </>
  )
}
