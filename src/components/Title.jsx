import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomHeading from './CustomHeading'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '50px',
    },
  },
  divider: {
    borderTop: '0.5px solid #000000',
    width: '100%',
    marginLeft: '10px',
    marginTop: '15px',
    [theme.breakpoints.up('lg')]: {
      marginTop: '20px',
    },
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.up('lg')]: {
      fontSize: '32px',
      lineHeight: '38px',
    },
  },
  heading2: {
    color: theme.palette.primary.main,
    marginLeft: '5px',

    [theme.breakpoints.up('md')]: {
      marginLeft: '10px',
    },
  },
}))

export default function Title({ heading, heading2 }) {
  const classes = useStyles()
  return (
    <Box display="flex" className={classes.root}>
      <CustomHeading heading={heading} className={classes.heading} />
      <CustomHeading heading={heading2} className={`${classes.heading} ${classes.heading2}`} />
      <Box className={classes.divider} />
    </Box>
  )
}
