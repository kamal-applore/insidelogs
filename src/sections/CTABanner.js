import { makeStyles } from '@material-ui/core'
import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomHeading from '../components/CustomHeading'
import CustomLabel from '../components/CustomLabel'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '50px 0px 40px 10px',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      padding: '50px 0px 40px 100px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 0px 55px 154px',
    },
  },
  textWhite: {
    color: theme.palette.common.white,
  },
  heading: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '34px',
      marginTop: '10px',
    },
  },
  button: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    borderRadius: '50px',
    display: 'flex',
    // justifyContent: 'center',
    margin: '0px auto',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.up('md')]: {
      padding: '5px 40px',
      margin: 0,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '10px 40px',
    },
  },
}))

export default function CTABanner({ heading, label, about, button }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {about ? (
        <div>
          <CustomHeading heading={heading} className={`${classes.heading} ${classes.textWhite}`} />
          <br />
          <CustomLabel label={label} className={classes.textWhite} />
        </div>
      ) : (
        <div>
          <CustomLabel label={label} className={classes.textWhite} />
          <CustomHeading heading={heading} className={`${classes.heading} ${classes.textWhite}`} />
        </div>
      )}
      <br />
      <CustomButton text={button} className={classes.button} />
    </div>
  )
}
