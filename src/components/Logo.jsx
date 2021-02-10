/* eslint-disable */

import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
// import { ROUTES } from '../../shared/constants'
import CustomLabel from './CustomLabel'
import CustomImage from './CustomImage'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '35px',
    height: '30px',
    marginLeft: '12px',
    // cursor: 'pointer',
    display: 'flex',
    // margin: '0px auto',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      width: '70px',
      height: '43px',
      //   marginLeft: '9px',
    },
  },
  label: {
    fontSize: '23px',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'left',
    // fontFamily: 'Inter',
    marginTop: '11px',
  },
}))

export default () => {
  const classes = useStyles()
  // const history = useHistory()

  return (
    <div style={{ cursor: 'pointer' }}>
      <CustomImage image={Logo} className={classes.image} />
      <CustomLabel label="Inside Logs" className={classes.label} />
    </div>
  )
}
